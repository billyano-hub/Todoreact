import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Button from "./components/Button.js";
import Counter from "./components/Counter.js";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";


function App(){
  const[count,setCount] =useState(0);
  let backgroundColor="green"
//let count=500;

//let accountBalance=10000;

const handleReduction = () => {
  //if you want dont want count to go below zero
  if(count == 0){
    setCount(0)

  }
  else{
    setCount(count-1)
  }

}
const handleIncreasement = () => {
  
    //alert("You increased count state")
    setCount(count+1)
}

  return(
    <div className='container'>
      <Header bg={backgroundColor}/>

     {/* <Button count={count}/> */}
      <Counter count={count} handleReduction={handleReduction} handleIncreasement={handleIncreasement} />
      <Footer/>
    </div>
  )
}
export default App;