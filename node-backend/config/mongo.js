require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        url = "mongodb+srv://Seon:Seonunicode@cluster0.ib1y5gn.mongodb.net/Reddit?retryWrites=true&w=majority"
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;