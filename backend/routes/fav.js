const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('favorites.js Connected to the trendytreehugger database.');
});

// Route to get user's favorite products
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = `
        SELECT f.*, p.name, p.price, p.pic
        FROM favorites f
        INNER JOIN products p ON f.product_id = p.id
        WHERE f.user_id = ?`;
    db.all(sql, [userId], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(rows);
    });
});

// Route to add a product to user's favorites
router.post('/:userId/add', (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body;
    const sql = 'INSERT INTO favorites (user_id, product_id) VALUES (?, ?)';
    db.run(sql, [userId, productId], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add product to favorites' });
        }
        res.status(201).json({ message: 'Product added to favorites successfully', id: this.lastID });
    });
});

// Route to remove a product from user's favorites
router.delete('/:userId/remove/:favoriteId', (req, res) => {
    const { userId, favoriteId } = req.params;
    const sql = 'DELETE FROM favorites WHERE user_id = ? AND id = ?';
    db.run(sql, [userId, favoriteId], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to remove product from favorites' });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Product not found in favorites' });
        }
        res.json({ message: 'Product removed from favorites successfully' });
    });
});

module.exports = router;
