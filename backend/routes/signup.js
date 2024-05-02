const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('signup.js Connected to the trendytreehugger database.');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Check if the email already exists
  db.get('SELECT * FROM users WHERE email =?', [email], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (row) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Insert the new user into the database with plain text password and empty cart
    db.run('INSERT INTO users (email, password, cart) VALUES (?,?,?)', [email, password, '[]'], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.status(201).json({ message: 'User signed up successfully' });
    });
  });
});

module.exports = router;
