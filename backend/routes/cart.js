const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
if (err) {
console.error(err.message);
}
console.log('cart.js Connected to the trendytreehugger database.');
});

// Route to get user's cart with product details including the image
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const sql = `
    SELECT c.*, p.name, p.price, p.pic
    FROM cart c
    INNER JOIN products p ON c.product_id = p.id
    WHERE c.user_id = ?`;
  db.all(sql, [userId], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(rows);
  });
});

// Route to add a product to user's cart
router.post('/:userId/add', (req, res) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;
    const sql = 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)';
    db.run(sql, [userId, productId, quantity], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add product to cart' });
        }
        res.status(201).json({ message: 'Product added to cart successfully', id: this.lastID });
    });
});

// Route to update quantity of a product in user's cart
router.put('/:userId/update/:cartId', (req, res) => {
    const { userId, cartId } = req.params;
    const { quantity } = req.body;
    const sql = 'UPDATE cart SET quantity = ? WHERE user_id = ? AND id = ?';
    db.run(sql, [quantity, userId, cartId], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to update product quantity in cart' });
        }
        res.json({ message: 'Product quantity updated in cart successfully', changes: this.changes });
    });
});

// Route to remove a product from user's cart
router.delete('/:userId/remove/:cartId', (req, res) => {
    const { userId, cartId } = req.params;
    const sql = 'DELETE FROM cart WHERE user_id = ? AND id = ?';
    db.run(sql, [userId, cartId], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to remove product from cart' });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Product not found in cart' });
        }
        res.json({ message: 'Product removed from cart successfully' });
    });
});

module.exports = router;