import { createContext,useContext, useState } from "react";
const ProductContext= createContext()

export const ProductContextProvider=({children})=>{
    const[products, setProducts]= useState()
    return <ProductContext.Provider value={{products,setProducts}}>
        {children}
    </ProductContext.Provider>
}

export const useProduct= ()=>useContext(ProductContext)