const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('newarrival.js Connected to the trendytreehugger database.');
});

// Route to get new arrivals for all categories
router.get('/', async (req, res) => {
  try {
    const newData = []; // Array to store new arrivals for all categories

    // Function to fetch new arrivals for a specific category
    const fetchNewArrivals = (categoryId) => {
      const sql = `SELECT * FROM products WHERE category_id = ? ORDER BY id DESC LIMIT 2`; // Fetch last 2 new arrivals for the category
      return new Promise((resolve, reject) => {
        db.all(sql, [categoryId], (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
    };

    // Fetch new arrivals for men (category_id = 1)
    const menArrivals = await fetchNewArrivals(1);
    newData.push(...menArrivals);

    // Fetch new arrivals for women (category_id = 2)
    const womenArrivals = await fetchNewArrivals(2);
    newData.push(...womenArrivals);

    // Fetch new arrivals for kids (category_id = 3)
    const kidArrivals = await fetchNewArrivals(3);
    newData.push(...kidArrivals);

    // Send the combined data as response
    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
