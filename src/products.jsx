import React from "react";
import OneProduct from './oneProduct';

const Products = ({products, onAdd}) => {
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
         <OneProduct product={prod} key={prod.id} onAdd={onAdd}/> //sa leve str jednakosti je property a sa desne funkcija
      )  )}

  </div>

  )
}

export default Products;