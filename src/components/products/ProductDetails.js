import React from "react";
import useState from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProductQuanity from "./ProductQuantity";
import { addToCart } from "../../store/actions/productActions";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";

const ProductDetails = props => {
  const { product, auth } = props;
  //Prob need to change null back to 1
  const [count, setCount] = React.useState(1);
  //Prob need to change null back to product

  function handleChildClick(newCount) {
    setCount(newCount);
    console.log("PD COUNT: ", count);
  }

  function handleClick(e) {
    e.preventDefault();
    //add quantity of item to shopping cart equal to count
    props.addToCart(product, count);
    ToastsStore.success("Added to Cart");
  }

  if (!auth.uid) return <Redirect to="/login" />;
  if (product) {
    const treeInfo = product.sizeNow ? (
      <div>
        <p>Maintenance info: {product.maintenance}</p>
        <p>Size now: {product.sizeNow}m</p>
        <p>Fully grown: ~{product.sizeGrown}m</p>
        <p>Count: {count}</p>
      </div>
    ) : null;
    return (
      <div className="container section product-details">
        <div>
          <ToastsContainer className="toastsContainer"
            store={ToastsStore}
            position={ToastsContainerPosition.BOTTOM_CENTER}
          />
        </div>
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-image">
              <img src={product.image} />
            </div>
            <span className="card-title">{product.name}</span>
            <div>
              <p>{product.description}</p>
              <p>{treeInfo}</p>
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div align="center">
              <p style={{ fontSize: "24px" }} className="grey-text">
                ${product.price} ea
              </p>
            </div>
            <div align="center">
              <div className="input-field">
                <ProductQuanity value={count} onChildClick={handleChildClick} />
                <button
                  onClick={handleClick}
                  style={{ fontWeight: 400, fontSize: "17px" }}
                  className="btn pink lighten-1 z-depth-1"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (product, count) => dispatch(addToCart(product, count))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "products"
    }
  ])
)(ProductDetails);
