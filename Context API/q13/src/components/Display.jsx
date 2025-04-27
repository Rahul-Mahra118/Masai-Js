import React from 'react'
import { useAuth } from '../context/AuthContext'
const Display = () => {
    const {isloggedIn}= useAuth()
  return (
    <div>
        {isloggedIn?<p>{'I am log in bro'}</p>:<p>{'Log out hogya yara'}</p>}
    </div>
  )
}

export default Display