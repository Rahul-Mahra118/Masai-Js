import { useState } from "react"

const Login:React.FC = () => {
    const[isSignUp, setSignUp]= useState<boolean>(false)
  return (
    <>

    <form action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="enter the name" required  />
    </form>
    </>
  )
}

export default Login