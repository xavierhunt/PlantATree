import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/productActions";

const CartSummary = props => {
  const [, forceUpdate] = React.useState(0);

  const { product, auth } = props;
  const total = product.price * product.quantity;

  function handleClick(e) {
    e.preventDefault();
    //add quantity of item to shopping cart equal to count
    props.removeFromCart(product);
  }

  return (
    <div className="card z-depth-2 product-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="resize">
          <img align="center" src={product.image} alt="No Image."/>
        </div>
        <span className="card-title">{product.name}</span>
        <p>{product.description}</p>
        <br></br>
        <p>Units ordered: {product.quantity}</p>
        <p className="grey-text">Line total: ${total}</p>
        <div align="center">
          <button
            onClick={handleClick}
            style={{ fontWeight: 400, fontSize: "12px" }}
            className="btn pink lighten-1 z-depth-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartSummary);
