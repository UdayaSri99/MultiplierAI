

import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, fetchTodos }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      fetchTodos(); 
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
 
  return (
    <li>
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;


