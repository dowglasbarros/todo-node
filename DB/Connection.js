require('dotenv').config();
const mongoose = require('mongoose');
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.7v3yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async() => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('DB connected');
}

module.exports = connectDB;