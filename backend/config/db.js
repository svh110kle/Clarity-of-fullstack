const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // connect to MongoDB local
    await mongoose.connect("mongodb://127.0.0.1:27017/fullstackDB");

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

module.exports = connectDB;
