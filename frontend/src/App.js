import './App.css';
import { useState } from 'react';

/* jsx syntax presented by react which makes it a lot easier to synthesize js and html - we create a js function that returns html*/
function App() { // this 'function App()' is known as a component
const introduction = 
  <div>  
    <h1> Welcome to our subject and sentiment classification model! </h1>
    <p> Here, you can test the subject and sentiment of any passage of text you enter</p>
    <p> To get started, enter the text you'd like to predict on in the textbox below. Once you have done this, click the button below to predict! </p>
 </div>
const [data, setData] = useState(""); // creates a state with a default empty string
const change = event => { 
   // grabs the dynamic value from the input box
   setData(event.target.value)
}
const click = () => { // this is where I want to predict based off the data 
  Predict(data)
  alert(data) }
return (
    <div className="App">
      {introduction}
       <input type="text" value={data} onChange = {change}/>
      <br/>
      <button onClick = {click}> Click here to predict! </button>
      {/* basic idea -- figure out a way to laod both models, figure out a how to let the user enter text, predict on the text they enter and return the results to the user */}
      
    </div>
  );
}
function Predict() { // call PyScript somehow...
  // predict.py
}
export default App; // runs the App component
