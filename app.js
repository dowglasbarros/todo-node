const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
const Port = process.env.Port || 3000;

app.use(express.json());

// Routes
app.post('/todo', (req, res) => {
  console.log(req.body);
  res.json({ status: 'To-do created successfully!' })
});

app.listen(Port, () => {
  console.log('Server started on port 3000');
});