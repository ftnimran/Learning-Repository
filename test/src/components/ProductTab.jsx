import React from "react";
import Product from "./Product";
import "./ProductTab.css";

const ProductTab = () => {
  return (
    <div className="ProductTab">
      <Product
        title="Logitech MX Master 3s"
        description1="8000 DPI"
        description2="5 Programmable Button"
        price={1}
      />
      <Product
        title="Logitech MX Master 3s"
        description1="8000 DPI"
        description2="5 Programmable Button"
        price={1}
      />
      <Product
        title="Logitech MX Master 3s"
        description1="8000 DPI"
        description2="5 Programmable Button"
        price={1}
      />
      <Product
        title="Logitech MX Master 3s"
        description1="8000 DPI"
        description2="5 Programmable Button"
        price={1}
      />
    </div>
  );
};

export default ProductTab;
