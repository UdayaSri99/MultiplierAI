// src/components/AddTodo.js

import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ fetchTodos }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todoText.trim()) return; // Avoid empty to-do

    try {
      await axios.post('http://localhost:5000/api/todos', { text: todoText });
      fetchTodos();  // Re-fetch todos after adding new one
      setTodoText('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new to-do"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
