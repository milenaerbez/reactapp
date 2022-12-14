import React from "react";

const OneProduct = (props) => {
  const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card" style={design}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{props.prodName}</h3>
        <p className="card-text">
        {props.prodDesc}
        </p>
        <button className="btn">+</button>
        <button className="btn">-</button>
      </div>
    </div>
  );
};

export default OneProduct;
