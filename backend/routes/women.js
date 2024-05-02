const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('women.js Connected to the trendytreehugger database.');
});

// Route to get all women's products
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM products WHERE category_id = 2'; // Assuming category_id for women is 2
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(rows.map(row => ({ ...row, id: row.id }))); // Add id field to each product
  });
});

// Route to get a specific women's product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM products WHERE id = ? AND category_id = 2'; // Assuming category_id for women is 2
  db.get(sql, [id], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (!row) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(row);
  });
});

// Route to add a new women's product
router.post('/', (req, res) => {
  const { name, price, pic, instock, description } = req.body;
  const category_id = 2; // Assuming category_id for women is 2
  const sql = 'INSERT INTO products (name, price, pic, category_id, instock, description) VALUES (?, ?, ?, ?, ?, ?)';
  db.run(sql, [name, price, pic, category_id, instock, description], function(err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to add product' });
    }
    res.status(201).json({ message: 'Product added successfully', id: this.lastID });
  });
});

// Route to update an existing women's product
router.put('/:id', (req, res) => {
  const { name, price, pic, instock, description } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE products SET name = ?, price = ?, pic = ?, instock = ?, description = ? WHERE id = ? AND category_id = 2'; // Assuming category_id for women is 2
  db.run(sql, [name, price, pic, instock, description, id], function(err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update product' });
    }
    res.json({ message: 'Product updated successfully', changes: this.changes });
  });
});

// Route to delete a women's product
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM products WHERE id = ? AND category_id = 2'; // Assuming category_id for women is 2
  db.run(sql, [id], function(err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to delete product' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  });
});

module.exports = router;
