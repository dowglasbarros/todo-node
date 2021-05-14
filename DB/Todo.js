const mongoose = require('mongoose');

const todo = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Todo = mongoose.model('todo', todo);