import Header from "./components/todo/Header.js";
import Content from "./components/todo/Content.js";
import Footer from "./components/todo/Footer.js";
import TodoForm from "./components/todo/TodoForm.js";
import Contact from "./components/todo/Contact.js";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";


function App(){
  const[todo,setTodo] =useState([])
    

  const addTodo=(task)=>{
    let id=Date.now();
    setTodo(function(todo){
      return [...todo, {id: id,task:task}]
    });
  }


  return(
    <div className='container'>
      <Header todos={todo}/>
      <TodoForm addTodo={addTodo}/>
      <Content todos={todo}/>
      <Footer/>
      <Contact/>
    </div>
  )
}
export default App;