import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProductDetails = props => {
  const { product, auth } = props;
  if (!auth.uid) return <Redirect to="/login" />;
  if (product) {
    const treeInfo = product.sizeNow ? (
      <div>
        <p>Maintenance info: {product.maintenance}</p>
        <p>Size now: {product.sizeNow}m</p>
        <p>Fully grown: ~{product.sizeGrown}m</p>
      </div>
    ) : null;
    return (
      <div className="container section product-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div class="card-image">
          <img src="https://i.imgur.com/I0533uv.jpg" />
            </div>
            <span className="card-title">{product.name}</span>
            <p>{product.description}</p>
            <p>{treeInfo}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              <p className="grey-text">${product.price} ea</p>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-1">
                Add to Cart
              </button>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "products"
    }
  ])
)(ProductDetails);
