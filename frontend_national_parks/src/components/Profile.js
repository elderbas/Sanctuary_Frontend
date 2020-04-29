import React, { Component } from "react";
import InnerNav from "./InnerNav";

class Profile extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: localStorage.getItem("currentUserEmail"),
    password: "",
    password_confirmation: "",
    zipcode: null,
    birthday: "",
  };

  componentDidMount() {
    const token = localStorage.token;
    console.log("profile token is", token);
    if (token) {
      return fetch(`http://localhost:3000/current_user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => console.log("data is", data));
    }
  }

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
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    // placeholder="First Name"
                    placeholder="Jessica"
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
                    // placeholder="Last Name"
                    placeholder="Triana"
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
                    // placeholder="Email"
                    placeholder="jessica.triana.tx@gmail.com"
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
                    // placeholder="Zip Code"
                    placeholder="78745"
                    value=""
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-7">
                  <input
                    type="date"
                    className="form-control"
                    id="inputBirthday"
                    name="birthday"
                    // placeholder="Birthday"
                    placeholder="12/05/1990"
                    value={this.state.birthday}
                    onChange={this.handleChange}
                  />
                  <small
                    id="birthdayHelpBlock"
                    className="form-text text-muted"
                  >
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
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Passwords must be 8-20 characters long.
                </small>
              </div>
              <div className="form-row text-center">
                <div className="col-12">
                  <br></br>
                  <button type="submit" className="btn btn-dark">
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
