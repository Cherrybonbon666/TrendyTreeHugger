const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('carbon.js Connected to the trendytreehugger database.');
});

router.post('/submit-footprint', (req, res) => {
  const { productName, category, carbonFootprint, description } = req.body;

  const date = new Date().toLocaleDateString();

  console.log('Product Name:', productName);
  console.log('Category:', category);
  console.log('Carbon Footprint:', carbonFootprint);
  console.log('Description:', description);

  if (!productName || !category || !carbonFootprint || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  db.run('INSERT INTO carbon (carbon_product, carbon_category, carbon_footprint, carbon_descrip) VALUES (?,?,?,?)', [productName, category, carbonFootprint, description], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.status(201).json({ message: 'Footprint submitted successfully' });
  });
});

module.exports = router;
