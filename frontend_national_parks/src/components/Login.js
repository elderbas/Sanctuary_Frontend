import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
      redirect: null,
      fields: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    const newFields = {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    };
    this.setState({ fields: newFields });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let email = this.state.fields.email;
    email.toLowerCase();

    let password = this.state.fields.password;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        localStorage.setItem("token", data.jwt);
        this.setState({ currentUser: data });
      });

    this.setState({ redirect: "/main" });
  };

  findUser = () => {
    fetch(`http://localhost:3000/current_user`, {
      method: "GET",
      header: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("current user", data);
      });
      this.findUser();
  };

  render() {
    
    const { fields } = this.state;
    if (this.state.redirect) {
      return (
        <Redirect
          to={{ pathname: "/main", state: { user: this.state.currentUser } }}
        />
      );
    }

    return (
      <div className="LoginBackgroundImage">
        <NavBar c />
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
                  value={fields.email}
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
                  value={fields.password}
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
        )}
      </div>
    );
  }
}

export default Login;
