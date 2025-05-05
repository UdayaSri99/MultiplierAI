
const Todo = require('../models/Todo');
 

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const createTodo = async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text });
  const savedTodo = await newTodo.save();
  res.status(201).json(savedTodo);
};


const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todo.findByIdAndDelete(id);
  res.json(deletedTodo);
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo
};
