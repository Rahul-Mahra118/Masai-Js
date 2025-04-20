import { useState } from 'react'
import './App.css'
function App(){
  const[currentcolor,setColor]=useState('red')
  const handleClick=()=>{
    //toggle 
      setColor(prevcolor=>(prevcolor==='red'?'blue':'red'))
  }
  return (
    <>
    <button onClick={handleClick} style={{backgroundColor:currentcolor,color:'white'}}>{currentcolor}</button>
    </>
  )
}

export default App
