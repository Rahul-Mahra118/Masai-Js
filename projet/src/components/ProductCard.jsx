import React from "react";
import { useState } from "react";
const ProductCard = ({ product }) => {
  const [like, setLikes] = useState(0);
  return (
    <div>
      <h2>{product.title}</h2>
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <p>
        {"Price->"}
        {product.price}
      </p>
      <button onClick={() => setLikes(like + 1)}>Like {like}</button>
    </div>
  );
};

export default ProductCard;
