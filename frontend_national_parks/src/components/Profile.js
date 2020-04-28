import React, { Component } from "react";
import InnerNav from "./InnerNav";

class Profile extends Component {
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
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <InnerNav />
        <br></br>
        <div className="ProfileBackgroundImage">
          <div className="ProfileForm">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "lighter",
                color: "dark gray",
              }}
            >
              Edit Profile
            </h1>
            <br></br>
            <form onSubmit={this.handleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="first_name"
                    name="first_name"
                    // placeholder="First Name"
                    placeholder="Jessica"
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
                    // placeholder="Email"
                    placeholder="jessica.triana.tx@gmail.com"
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
                    // placeholder="Zip Code"
                    placeholder="78745"
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
                    // placeholder="Birthday"
                    placeholder="12/05/1990"
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
                <small id="passwordHelpBlock" class="form-text text-muted">
                  Passwords must be 8-20 characters long.
                </small>
              </div>
              <div class="form-row text-center">
                <div class="col-12">
                  <br></br>
                  <button type="submit" class="btn btn-dark">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="ProfilePhrase">
            We're a million<br></br> different<br></br> people from<br></br>one
            day to the <br></br>next.
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
