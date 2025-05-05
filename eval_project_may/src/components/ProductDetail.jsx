import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProduct } from "../context/ProductContextProvider";

export const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProduct();
  const [individualProduct, setindividualProduct] = useState();

  useEffect(() => {
    const individualProduct = products.find(
      (product) => product.id == parseInt(id)
    );
    console.log(individualProduct);
    setindividualProduct(individualProduct);
  }, []);
  return (
    <>
      {individualProduct ? (
        <div>
          <h2>Title:{individualProduct.title}</h2>
          <h2>Price:{individualProduct.price}</h2>
          <h2>Rating:{individualProduct.rating}</h2>
        </div>
      ) : (
        console.log("load")
      )}
    </>
  );
};
