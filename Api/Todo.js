const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./DB/Todo');
const route = express.route();

route.post('/', async(req, res) => {
  const{title, description} = req.body;
  let todo = {};
  todo.title = title;
  todo.description = description;
  
  let todoModel = new Todo(todo);
  await todoModel.save();
  res.json(todoModel);
});