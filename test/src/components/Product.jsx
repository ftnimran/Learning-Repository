import React from "react";
import "./Product.css";

const Product = ({ title, description1, description2, price }) => {
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>{description1}</p>
      <p>{description2}</p>
      <div>
        <h3>{price}</h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default Product;
