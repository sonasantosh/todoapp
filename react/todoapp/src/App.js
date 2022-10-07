import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import CreateTodo from './components/CreateTodo';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo = localStorage.getItem("todos")===null ? [] : JSON.parse(localStorage.getItem("todos"));
  const onDelete = (todoItem)=>{
    setTodos(todos.filter((e)=>{
      return e!==todoItem;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const createTodoItem = (title, desc)=>{
    let sno = todos.length===0 ?  1 : todos[todos.length-1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="App">
      <BrowserRouter>
      <Header title="Todo" searchBar={true} />
        <Routes>
          <Route path="/"  element={
            <>
              <CreateTodo title="Create a Todo" createTodoItem={createTodoItem}/>
              <TodoList title="Todo TodoList" todos={todos} onDelete={onDelete}/>
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      <Footer title="Todo Copyright All Rights Reserved." />
      </BrowserRouter>
    </div>
  );
}

export default App;