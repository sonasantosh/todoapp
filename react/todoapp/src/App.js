import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
function App() {
  function test(e){
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.desc.value);
    
  }
  return (
    <div className="App">
      <Header title="Todo" searchBar={true} />
      <TodoList title="Todo TodoList" test={test} />
      <Footer title="Todo Copyright All Rights Reserved." />
    </div>
  );
}

export default App;