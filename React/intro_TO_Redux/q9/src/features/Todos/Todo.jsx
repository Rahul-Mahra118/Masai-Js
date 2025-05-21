import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './todoSlice';

export const Todo = () => {

  const todos= useSelector(state=>state.todos.todos);
  const disPatch= useDispatch()
  const [input, setInput]= useState('')

  const handleChange=(e)=>{
    setInput(e.target.value)
    console.log(e.target.value)
  }
  const handleTodo=()=>{

    disPatch(addTodo(input))
    setInput('')
    
  }
  return (
    <div>
      <input type="text"  placeholder='Enter the text..' onChange={handleChange} value={input}/>
      <button onClick={handleTodo}>Add Todo</button>

      {
        todos&& todos.map((todo,index)=>(
          <div key={index}>
                <h2>{todo}</h2>
          </div>

        ))
      }
    </div>
  )
}
