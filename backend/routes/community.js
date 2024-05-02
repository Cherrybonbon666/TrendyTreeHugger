const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Database setup
const db = new sqlite3.Database('trendytreehugger.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('community.js Connected to the trendytreehugger database.');
});

router.post('/submit-article', upload.single('image'), (req, res) => {
    const image = req.file;
    const { title, description, body } = req.body;
  
    console.log('Image:', image);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Body:', body);

  
    db.run('INSERT INTO article (article_pic, article_title, article_descrip, article_body) VALUES (?,?,?,?)', [article_pic, article_title, article_descrip, article_body], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        res.status(201).json({ message: 'Article submitted successfully' });
    });
});

module.exports = router;
