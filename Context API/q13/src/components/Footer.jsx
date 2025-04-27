import React from 'react'
import { useAuth } from '../context/AuthContext'
const Footer = () => {
    const{isloggedIn} = useAuth()
  return (
    <div>
        {
            isloggedIn?<p>{'Welcome User'}</p>: <p>Not there </p>
        }
    </div>
  )
}

export default Footer