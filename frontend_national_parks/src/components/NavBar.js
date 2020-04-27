import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
          <h3 className="Logo">Sanctuary</h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse w-100 order-3 dual-collapse2"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Log In
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
