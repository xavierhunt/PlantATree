import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import ProductDetails from './components/products/ProductDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ShoppingCart from './components/products/ShoppingCart';
import MyAppBar from './components/layout/MyAppBar';

import { connect } from 'react-redux'


const App = (props) => {
  const { auth, profile } = props;
  const nav = auth.uid ? <MyAppBar profile={profile}/> : null;
  return (
    <BrowserRouter>
      <div>
            {nav}
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/login" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/cart" component={ShoppingCart} />

            </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(App)