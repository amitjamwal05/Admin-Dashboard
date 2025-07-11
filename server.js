// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Add this route for root path
app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;
