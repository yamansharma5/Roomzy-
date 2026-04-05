require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const data = require('./data.js');
const connectDB = require('../config/db');
const Listing = require('../models/listings');// Import the Listing model


const initDb = async () => {
  try {
    await connectDB(); // Ensure the database connection is established
    await Listing.deleteMany({});
    await Listing.insertMany(data);
    console.log("Database Initialized with Sample Data");
    process.exit();
  } catch (error) {
    console.error("DB Initialization Failed:", error.message);
    process.exit(1);
  }
};

initDb();