const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('product.js Connected to the trendytreehugger database.');
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  // Implement logic to fetch product details from the database based on the productId
  // Example:
  db.get('SELECT * FROM products WHERE id = ?', [productId], (err, row) => {
    if (err) {
      console.error('Error fetching product:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (!row) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(row);
    }
  });
});

module.exports = router;
