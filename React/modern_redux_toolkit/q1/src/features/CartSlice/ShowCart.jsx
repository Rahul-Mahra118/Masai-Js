import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './cartSlice'

const ShowCart = () => {
    const dispatch=useDispatch()
    const {total}= useSelector((state)=>state.cart)
  return (
    <div>
        
            <div>Total:{total}</div>

        


    </div>
  )
}

export default ShowCart