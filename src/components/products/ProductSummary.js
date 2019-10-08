import React from "react";

const ProductSummary = ({product}) => {
  return (
    <div className="card z-depth-1 product-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{product.name}</span>
        <p>Attribute 1</p>
        <p>Attribute 2</p>
        <p className="grey-text">${product.price} ea</p>        
      </div>
    </div>
  );
};

export default ProductSummary;
