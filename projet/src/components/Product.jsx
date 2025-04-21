import { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./ProductCard";

const Product = () => {
  const[ products, setProducts]= useState([])
 
    useEffect(()=>{
        async function fetchProducts() {
          let response= await axios.get('https://dummyjson.com/products');
          console.log(response.data.products[0])
          let data= response.data.products;
          setProducts(data)
        }
        fetchProducts()
    },[])

  return (
    <div>
      {
        products.map((product,index)=>(
           <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Product;
