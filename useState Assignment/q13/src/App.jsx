import { useState } from 'react'
import './App.css'

function App() {
  const [product, setProduct] = useState({
    name:'',
    quantity:0
  })

  const handleChange=(e)=>{
     let value=e.target.value
    setProduct({...product,[product]:value})
  }

  const handleAddItem=()=>{

  }

  return(
    <>
    <input type="text" placeholder='Enter the product' onChange={handleChange} value={product.name}/>
    <input type="number" placeholder='Enter the Quantity' onChange={handleChange}  value={product.quantity}/>
    <button onClick={handleAddItem}>Add Item</button>
    </>
  )
}

export default App
