// Import required modules
const express = require('express');  // express = backend framework
const mongoose = require('mongoose'); // mongoose = connect to MongoDB
const cors = require('cors'); // allow frontend to talk to backend
require('dotenv').config(); // load .env variables

// Import database connection
const connectDB = require('./config/db');

// Import routes
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // allow cross-origin requests
app.use(express.json()); // allow JSON body data

// Use Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
