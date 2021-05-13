var express = require("express");
var app = express();

// Routes
app.post("/todo", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});