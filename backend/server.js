
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Database setupa
const db = new sqlite3.Database('trendytreehugger.db');

// Import routes
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
const carbonRoute = require('./routes/carbon');
const menRouter = require('./routes/men');
const womenRouter = require('./routes/women');
const kidRouter = require('./routes/kid');
const saleRouter = require('./routes/sale');
const newRouter = require('./routes/new');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart'); // Import the new router
const favRouter = require('./routes/fav'); // Import the new router
const searchRouter = require('./routes/search');








// Middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from TrendyTreehugger backend!');
});

// Use signup route
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
app.use('/api/carbon', carbonRoute);
app.use('/api/men', menRouter);
app.use('/api/women', womenRouter);
app.use('/api/kid', kidRouter);
app.use('/api/sale', saleRouter);
app.use('/api/new', newRouter);
app.use('/api/products/kid', productRouter);
app.use('/api/cart', cartRouter); // Add the new router for adding to cart
app.use('/api/fav', favRouter); // Add the new router for adding to cart
app.use('/api/search', searchRouter);






// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
