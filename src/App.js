import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProductDetails from './components/products/ProductDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ShoppingCart from './components/products/ShoppingCart';

const App = () => {
  return (
    <BrowserRouter>
      <div>
            <Navbar/>
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

export default App;
