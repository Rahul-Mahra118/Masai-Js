import React from 'react'

export const Login = () => {
  return (
    <div>
        <h1>Login </h1>
        <input type="text" placeholder='Enter the Email' onChange={handleChange}/>
        <input type="password" placeholder='enter the password' onChange={handleChange} />
        <button onClick={handleClick}>Login </button>

    </div>
  )
}
