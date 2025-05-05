import React from 'react'
import { useCart } from '../context/CartcontextProvider'

export const Cart = () => {
    const{cart, setCart} = useCart()

    const totalPrice= cart.reduce((acc,curr)=>acc+curr.price,0)

    function handleDelete(id){
        const updatedCart=cart.filter(item=>item.id!=id)
        console.log(updatedCart)
        setCart(updatedCart)

    }
  return (
    <div>
        <h1 style={{backgroundColor:'purple',color:'whitesmoke'}}>Welcome To your cart</h1>
        {
           cart.map(product=>( 
            <div key={product.id}>
                <img src={product.images[0]} alt={product.title} width="300px" />
                <h2>Title:{product.title}</h2>
                <h2>Price:{product.price}</h2>
                <h2>Rating:{product.rating}</h2>
                <button onClick={()=>handleDelete(product.id)}>Delete the item</button>
                </div>))
        }
        <h3 style={{fontFamily:'cursive',color:'blue'}}>Total Price: ${totalPrice}</h3>



    </div>
  )
}
