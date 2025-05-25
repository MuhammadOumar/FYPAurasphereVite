// server.js
const express = require('express');
require('dotenv').config({ path: './.env' });  // Load environment variables
const port = process.env.PORT || 5000;  // Default to port 5000 if not specified
const app = express();
const connectDB = require('./Config/dbConnection');  // Import DB connection
const cors = require('cors');

// Connect to MongoDB
connectDB();
app.use(cors());

// Middleware
app.use(express.json());  // Middleware to parse incoming JSON data

// Routes
const userRoutes = require('./Routes/userRoutes');  // Import user routes
app.use('/api/users', userRoutes);  // Use user routes for '/api/users' endpoint

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
