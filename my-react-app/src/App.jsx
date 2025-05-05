
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './Components/AddTodo' ;
import TodoList from './Components/TodoList' ;
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);


  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
