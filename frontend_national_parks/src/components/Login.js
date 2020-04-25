import React, { Component } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Main from "./Main";
import {redirectTo} from '@reach/router'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      login: false,
      store: null,
    };
  }

  componentDidMount() {
    this.storeCollector();
  }

  storeCollector = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.setState({ login: true, store: store });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        console.log("result", result);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            store: result.token,
          })
        );
        this.storeCollector();
      });
    });
    redirectTo(<Main/>)
  };

  

  render() {
    console.log(this.state);
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
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
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
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>
              </div>
              <div class="form-row text-center">
                <div class="col-12">
                  <br></br>
                  <button
                    type="submit"
                    class="btn btn-dark"
                    // onClick={() => {
                    //   this.login();
                    // }}
                  >
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
