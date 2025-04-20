import { useState } from "react"

function App() {
  const [value, setValue] = useState('')
const handleChange=(e)=>{
   setValue(e.target.value)
}
const handleSubmit=()=>{
  if(!value) alert('Value is empty');
  else{
    alert(`input value ${value}`);
  }
  setValue('')
}
 return(
  <>

    <input type="text" placeholder="enter the value" value={value} onChange={handleChange}/>
    <button onClick={handleSubmit}>submit</button>
  </>
 )
}

export default App
