const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('login.js Connected to the trendytreehugger database.');
});

// Update the login route handler to fetch user's cart data along with login success message
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if the email exists and fetch user data
    db.get('SELECT id, email, password FROM users WHERE email = ?', [email], (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare the plain text password with the stored password
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // If the email and password match, fetch the user's cart data
        const userId = user.id;
        const cartSql = 'SELECT * FROM cart WHERE user_id = ?';
        db.all(cartSql, [userId], (err, cartRows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            // Include cart data in the response along with the login success message
            res.status(200).json({ userId: userId, message: 'Logged in successfully', cart: cartRows });
        });
    });
});

module.exports = router;
