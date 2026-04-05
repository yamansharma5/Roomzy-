const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();
const Listing = require('./models/listings');// Import the Listing model


// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello I am root');
});

app.get('/api/listings', async(req, res) => {
  let newListing = new Listing({
    title: "Cozy Apartment in Downtown",
    description: "A cozy apartment located in the heart of downtown, close to all amenities.",
    price: 1200,
    location: "Downtown",
    images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
    country: "USA"
  });
  await newListing.save()
    .then(savedListing => {
      console.log("Listing saved:", savedListing);
      res.json(savedListing);
    })
    .catch(error => {
      console.error("Error saving listing:", error);
      res.status(500).json({ message: "Server Error" });
    });
});




app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
}  );  
