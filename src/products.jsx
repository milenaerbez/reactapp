import React from "react";
import OneProduct from './oneProduct';

const Products = ({products}) => {
  //  const name = "Naziv proizvoda";
//const description = 
//"Malo duzi opis.";
//const product={
   // tittle: "Naziv",
   // description: "Malo duzi opis",
//};



  return (
    <div className="all-products">
        {products.map((prod) => (
         <OneProduct product={prod} key={prod.id}/>
      )  )}

  </div>

  )
}

export default Products;