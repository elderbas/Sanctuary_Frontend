import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
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
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("userEmail", data.email);
      });
    this.setState({ redirect: "/main" });
    this.findUser();
  };

  findUser = () => {
    let token = localStorage.getItem("token");
    console.log("token is", token);

    fetch(`http://localhost:3000/current_user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ` + token,
      },
    }).then((response) => response.json());
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
            <div className="form-row">
              <div className="form-group col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  placeholder="Email"
                  value={fields.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="password"
                  placeholder="Password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row text-center">
              <div className="col-12">
                <br></br>
                <button type="submit" className="btn btn-dark">
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
        <div className="ParkName">Rocky Mountain National Park</div>
      </div>
    );
  }
}

export default Login;
