
const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
// Middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect to MongoDB
// connectDB();
mongoose.connect(
  process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("database connected")).catch((err)=>console.error(err));

// Routes
app.use('/api/chat', chatRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
