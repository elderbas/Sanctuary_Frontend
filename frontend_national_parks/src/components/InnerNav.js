import React, { Component } from "react";

class InnerNav extends Component {
  render() {
    return (
      <nav
        class="navbar fixed-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <a class="navbar-brand" href="/main">
          <h3 className="InnerLogo">Sanctuary</h3>
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
          <span class="navbar-text mr-5">
      Hi USER!
    </span>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/main">
                Main
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/trips">
                Trips
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/profile">
                Profile
              </a>
            </li>

            <button type="button" class="btn btn-outline-secondary btn-sm mr-3">
              Log Out
              {/* On click, log user out and re-route to "/" */}
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default InnerNav;
