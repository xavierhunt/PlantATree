import React from "react";
import CartList from "../products/CartList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

const Checkout = props => {
  const { products, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div>
      <div align="center">
        <h5>Checkout</h5>
        <p>PAYMENT OPTIONS TBA</p>
      </div>
      <div className="Checkout container">
        
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

export default connect(mapStateToProps)(Checkout)
