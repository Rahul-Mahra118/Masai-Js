import React, { useReducer } from 'react'

export const Signup = () => {
    const initialState={
        email:'',
        password:''
    }
    const[ state, dispatch]= useReducer(reducerFun, initialState)
    function reducerFun(){
        
    }
  return (
    <div>
        <input type="text" placeholder='Enter the Email' onChange={handleChange} name='email'/>
        <input type="password" placeholder='Enter the password' onChange={handleChange} name='password' />
    </div>
  )
}
