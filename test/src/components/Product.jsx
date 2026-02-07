import React from "react";
import "./Product.css";

const Product = ({ MyName, MyJob }) => {
  return (
    <div className="Product">
      <h1>Hi, I'm {MyName.toUpperCase()}</h1>
      <p>I'm {MyJob}</p>
    </div>
  );
};

export default Product;
