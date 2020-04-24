import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    zipcode: null,
    birthday: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="SignUpBackgroundImage">
        <NavBar />
        <br></br>
        <div className="SignUpForm">
          <h1 style={{ textAlign: "center", fontWeight: "lighter", color: "dark gray" }}>Hello Stranger</h1>
          <br></br>
          <form onSubmit={this.handleSubmit}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </div>

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

              <div class="form-group col-md-5">
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  name="zipcode"
                  placeholder="Zip Code"
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-7">
                <input
                  type="date"
                  class="form-control"
                  id="inputZip"
                  name="birthday"
                  placeholder="Birthday"
                  value={this.state.birthday}
                  onChange={this.handleChange}
                />
                <small id="birthdayHelpBlock" class="form-text text-muted">
                  Enter your date of birth.
                </small>
              </div>

              <div class="form-group col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <small id="passwordHelpBlock" class="form-text text-muted">
                  Passwords must be 8-20 characters long.
                </small>
              </div>
             

              <div class="form-group col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  name="password_confirmation"
                  value={this.state.confirmpassword}
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                />
                
              </div>
              

              
            </div>
            <div class="form-row text-center">
            <div class="col-12">
              <br></br>
            <button type="submit" class="btn btn-dark">Sign up</button>
            </div>
            </div>
          </form><br></br>
          <p style={{textAlign: "center", fontSize: "small" }}>Already have an account? Log in<Link to="/login"> here</Link>.</p>
          
        </div>
      </div>
    );
  }
}

export default Signup;
