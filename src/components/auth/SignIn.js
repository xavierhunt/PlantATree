import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

var signUpButtonStyle = {
    margin: "20px"
}

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <div align="center"><h5 className="grey-text text-darken-3">Login</h5></div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div align="center">
          <div className="input-field">
              <button className="btn pink lighten-1 z-depth-1">Login</button>
              <Link to="signup" className="btn pink lighten-1 z-depth-1" style={signUpButtonStyle}>
                Sign Up
              </Link>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </div>   
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
