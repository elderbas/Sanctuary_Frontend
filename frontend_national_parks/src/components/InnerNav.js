import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class InnerNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      user: this.props.user,
    };
  }

  logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUserEmail");
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "white" }}
      >
        {this.renderRedirect()}
        <a className="navbar-brand" href="/main">
          <h3 className="InnerLogo">Sanctuary</h3>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse w-100 order-3 dual-collapse2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
        

            <li className="nav-item">
              <a className="nav-link" href="/main">
                Main
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/map">
                Map
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/trips">
                Trips
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <button
              type="button"
              className="btn btn-outline-secondary btn-sm mr-3"
              onClick={this.logOut}
            >
              Log Out
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default InnerNav;
