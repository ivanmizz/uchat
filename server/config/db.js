// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/uchat', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
