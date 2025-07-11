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

// Routes
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;

// Remove or comment out the following line:
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Add this line at the end:
module.exports = app;
