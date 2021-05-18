const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
require('dotenv').config();

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/todo', require('./Api/Todo'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server started on port 3000');
});