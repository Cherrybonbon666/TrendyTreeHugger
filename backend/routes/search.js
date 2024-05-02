const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('trendytreehugger.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('search.js connected to the trendytreehugger database.');
});

// Route to get all product names
router.get('/', (req, res) => {
    const searchTerm = req.query.q; // Get the search term from the query parameter
    const sql = `
      SELECT men_name AS product_name FROM men_product
      UNION
      SELECT women_name FROM women_product
      UNION
      SELECT kid_name FROM kid_product
      WHERE product_name LIKE '%${searchTerm}%'
    `;
    const rows = db.all(sql);
    res.json(rows.map(row => row.product_name)); // Return the search results
  });

module.exports = router;