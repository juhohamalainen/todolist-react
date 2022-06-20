import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoTable from './TodoTable';


function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo({description: '', date: ''});  //Tyhjennä kentät
  }
  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }
  const deleteAll = (row) => {
    setTodos([]);
  }

  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
      <button onClick={addTodo}> Add </button>
      <button onClick={deleteAll}> Delete all </button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
