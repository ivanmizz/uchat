// // server/config/db.js
// const mongoose = require('mongoose');
// import dotenv from 'dotenv';
// dotenv.config();

// const mongoURI = process.env.MONGO_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongoURI , {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
