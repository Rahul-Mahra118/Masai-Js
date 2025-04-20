import { useRef } from "react";
import "./App.css";

function App() {
  let inputref= useRef()
  const handleSubmit=()=>{
    console.log(inputref.current.value)
    console.log(inputref.current)
    alert(`input value is ${inputref.current.value}`)
  }

  return <>
     <input type="text" ref={inputref}/>
     <button onClick={handleSubmit}>submit</button>
       
  </>;
}

export default App;
