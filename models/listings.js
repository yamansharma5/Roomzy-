const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true 
        },
    description: { 
        type: String, 
        required: true },
    price: { 
        type: Number, 
        required: true },
    location: { 
        type: String, 
        required: true }, 
    images: [{ 
        type: String,
        default: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (images) => { images === '' ? "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : images } 
    }],
    country: { 
        type: String 
    }
    
}); 

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;   