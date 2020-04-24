import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="LoginBackgroundImage"> 
        <NavBar />
        <br></br>
        <div className="LoginForm">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "lighter",
              color: "dark gray",
            }}
          >
            Welcome Back
          </h1>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <div class="form-row">
              <div class="form-group col-md-12">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div class="form-group col-md-12">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="form-row text-center">
              <div class="col-12">
                <br></br>
                <button type="submit" class="btn btn-dark">
                  Log In
                </button>
              </div>
            </div>
          </form>
          <br></br>
          <p style={{ textAlign: "center", fontSize: "small" }}>
            Not a member? Sign up<Link to="/signup"> here</Link>.
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
