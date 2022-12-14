import React from "react";


//DESTRUKTUIRANJE OBJEKATA
const OneProduct = ({product}) => {
  const design = { margin: 10, borderStyle: "dashed" };
  //console.log(props);
  function onAdd(title){
    console.log("Dodat proizvod: "+ title);
  }
  return (
    <div className="card" style={design}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.tittle}</h3>
        <p className="card-text">
        {product.description}
        </p>
        <button className="btn" onClick={()=>onAdd(product.title)}>+</button>
        <button className="btn">-</button>
      </div>
    </div>
  );
};

export default OneProduct;
