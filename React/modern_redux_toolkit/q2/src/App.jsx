import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput]= useState('');

  return <>
     <input type="text" required  value={input} placeholder="enter the task..."/>
  </>;
}

export default App;
