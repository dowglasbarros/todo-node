const express = require("express");
const app = express();

app.use(express.json());

// Routes
app.post("/todo", (req, res) => {
  console.log(req.body);
  res.json({ status: 'To-do created successfully!' })
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});