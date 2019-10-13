import React from "react";
import useState from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Dashboard = props => {
  const [filter, setFilter] = React.useState("None");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () =>{
    setAnchorEl(null);
  };

  const { products, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <div>
            <div align="center">
              <button
                onClick={handleClick}
                style={{ fontWeight: 400, fontSize: "17px" }}
                className="btn pink lighten-1 z-depth-1"
              >
                Filter: {filter}
              </button>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => setFilter('Trees')}>Trees</MenuItem>
              <MenuItem onClick={() => setFilter('Equipment')}>Equipment</MenuItem>
              <MenuItem onClick={() => setFilter('None')}>None</MenuItem>
              <MenuItem onClick={handleClose}>Back</MenuItem>

            </Menu>
          </div>
          <ProductList products={products} filter={filter} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(Dashboard);
