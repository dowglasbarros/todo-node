const mongoose = require('mongoose');

const URI = 'mongodb+srv://${{ secrets.DB_USER }}:${{ secrets.DB_PASSWORD }}@cluster0.7v3yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectDB = async() => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('DB connected');
}

module.exports = connectDB;