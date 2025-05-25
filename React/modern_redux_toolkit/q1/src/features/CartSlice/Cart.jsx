import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from "./cartSlice";

export const Cart = () => {
//   const { add, total } = useSelector();
  const dispatch = useDispatch();

  const [product, setProduct]= useState({
    id: Date.now(),
    title:'',
    price:0
  })
  const handleAdd=(e)=>{
    e.preventDefault()
    dispatch(addItem(product))
    setProduct({
        ...product,
        title:'',
        price:0
    })
  }
  const handleChange=(e)=>{
  const{name, value}=e.target;
  setProduct({...product,[name]:value})
  }
  return (
    <div>
      <label htmlFor="product-title">Title</label>
      <input
        type="text"
        required
        placeholder="enter the product title"
        id="product-title"
        onChange={handleChange}
        value={product.title}
        name="title"
      />
      <label htmlFor="prouct-price">Price</label>
       <input
       required
       id='product-price'
       placeholder="enter the price"
       type="Number"
       name="price"
       value={product.price}
       onChange={handleChange}
      
       />
       <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};
