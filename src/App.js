import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    const getLocalTodos = () =>{
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
       setTodos(todoLocal);
      }     
    }
  
    getLocalTodos();
  }, []);

  useEffect(() =>{
    const filterHandeler = () =>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
      
    }
      //Save localstorage

    const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify([todos]));
    }

    
    filterHandeler();
    saveLocalTodos();
  }, [todos, status])



  return (
    <div className="App">
      <header>
        <h1>Todo App By Sajid</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        
      />
      <TodoList 
      filteredTodos={filteredTodos} 
      setTodos={setTodos}
      todos={todos} />
    </div>
  )

}

export default App;
