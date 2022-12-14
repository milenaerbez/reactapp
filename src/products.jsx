import React from "react";
import OneProduct from './oneProduct';

const Products = () => {
    const name = "New Product Name";
const description = 
"New product description that we got from Product component using props.";

  return (
    <div className="all-products">
   <OneProduct prodName={name} prodDesc={description} />
   <OneProduct prodName={name} prodDesc={description} />
   <OneProduct prodName={name} prodDesc={description} />
  </div>

  )
}

export default Products;