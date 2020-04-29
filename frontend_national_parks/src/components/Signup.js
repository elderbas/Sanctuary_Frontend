import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    redirect: null,
    user: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      zipcode: null,
      birthday: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          zipcode: this.state.zipcode,
          birthday: this.state.birthday,
        },
      }),
    })
      .then((response) => response.json())
      .then((user) => (window.userId = user.id))
      .then(this.setState({ redirect: "/login" }));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="SignUpBackgroundImage">
        <NavBar />
        <br></br>
        <div className="SignUpForm">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "lighter",
              color: "dark gray",
            }}
          >
            Hello Stranger
          </h1>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  name="zipcode"
                  placeholder="Zip Code"
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-7">
                <input
                  type="date"
                  className="form-control"
                  id="inputBirthday"
                  name="birthday"
                  placeholder="Birthday"
                  value={this.state.birthday}
                  onChange={this.handleChange}
                />
                <small id="birthdayHelpBlock" className="form-text text-muted">
                  Enter your date of birth.
                </small>
              </div>

              <div className="form-group col-md-6">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Passwords must be 8-20 characters long.
                </small>
              </div>

              <div className="form-group col-md-6">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="password_confirmation"
                  value={this.state.confirmpassword}
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row text-center">
              <div className="col-12">
                <br></br>
                <button type="submit" className="btn btn-dark">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <br></br>
          <p style={{ textAlign: "center", fontSize: "small" }}>
            Already have an account? Log in<Link to="/login"> here</Link>.
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
