import React from "react";

const ProductSummary = ({ product }) => {
  return (
    <div className="card z-depth-2 product-summary">
      <div className="card-content grey-text text-darken-3">
        <div class="card-image">
          <img src="https://i.imgur.com/I0533uv.jpg" />
        </div>
        <span className="card-title">{product.name}</span>
        <p>{product.description}</p>
        <p className="grey-text">${product.price} ea</p>
      </div>
    </div>
  );
};

export default ProductSummary;
