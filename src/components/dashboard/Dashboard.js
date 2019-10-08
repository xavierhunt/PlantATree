import React, { Component } from "react";
import Promotions from "./Promotions";
import ProductList from "../products/ProductList";
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';

class Dashboard extends Component {
  render() {
    const {products, auth} = this.props;
    if(!auth.uid) return <Redirect to='/login' />
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProductList products={products}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Promotions />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(Dashboard)
