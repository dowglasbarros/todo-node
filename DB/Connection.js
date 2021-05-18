require('dotenv').config();
const mongoose = require('mongoose');
const mongodbURI = process.env.MONGODB_URI;

const connectDB = async() => {
  await mongoose.connect(mongodbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('DB connected');
}

module.exports = connectDB;