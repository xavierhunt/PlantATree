import React from "react";
import CartList from "../products/CartList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { Link } from "react-router-dom";

const ShoppingCart = props => {

  const { products, auth } = props;
  var total = 0;
  if(products){
    products.map(function(item, i){
        total += (products[i].price * products[i].quantity)
    })
  }

  console.log("CART UID: ", auth.uid);
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div>
      <div align="center">
        <h5>Total: ${total}</h5>
      </div>
      <Link to={"/checkout/"}>
        <div align="center">
          <button
            style={{ fontWeight: 400, fontSize: "17px" }}
            className="btn pink lighten-1 z-depth-1"
          >
            Checkout
          </button>
        </div>
      </Link>
      <div className="shoppingcart container">
        <div className="row">
          <div className="col s12 m6">
            <CartList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const products =
    state.firestore.ordered.users && state.firestore.ordered.users[0].cart;
  // console.log(state);
  return {
    products,
    auth: state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "users",
      doc: props.auth.uid,
      subcollections: [{ collection: "cart" }]
    }
  ])
)(ShoppingCart);
