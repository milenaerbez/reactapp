import React from "react";

const OneProduct = () => {
  const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card" style={design}>
      <img
        className="card-img-top"
        src="https://picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">Product name</h3>
        <p className="card-text">
          Product description where we can read more details about it.
        </p>
        <button className="btn">+</button>
        <button className="btn">-</button>
      </div>
    </div>
  );
};

export default OneProduct;
