import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProduct } from "../context/ProductContextProvider";
import { useNavigate } from "react-router";
import { useCart } from "../context/CartcontextProvider";
export const ProductList = () => {
  const { products, setProducts } = useProduct();
  const [value, setValue] = useState("");

   const {cart,setCart}= useCart()
  let navigate= useNavigate()
  const fetchProducts = async () => {
    let response = await axios("https://dummyjson.com/products");
    let productsItems = response.data.products;
    console.log(productsItems);
    setProducts(productsItems);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch=()=>{
    const filterProduct= products.filter(product=> product.title==value)
    setProducts([...filterProduct])
    setValue('')
  }

  const handleAddCart=(product)=>{
        setCart([...cart,product])
    navigate('cart')
  }
  const   handleViewData=(id)=>{
    navigate(`product/${id}`)
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter the product"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding:'30px'
        }}
      >
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <img src={product.images[0]} alt={product.title} width="300px" />
              <h2>Title:{product.title}</h2>
              <h2>Price:{product.price}</h2>
              <h2>Rating:{product.rating}</h2>
              <button onClick={(e)=>{
                    e.stopPropagation()
                    handleViewData(product.id)

                }}>View Product</button>
              <button onClick={
                (e)=>{
                    e.stopPropagation()
                    handleAddCart(product)

                }
              }>Add Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};
