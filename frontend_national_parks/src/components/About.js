import React, { Component } from "react";
import InnerNav from "./InnerNav";


class About extends Component {
  render() {
    return (
      <div>
        <InnerNav />
        <div className="AboutBackground">
          <div className="AboutBox">
            <h1
              style={{
                textAlign: "center",
                fontWeight: "lighter",
                color: "dark gray",
              }}
            >
              About Sanctuary
            </h1>
            <br></br>
            <div style={{ textAlign: "center" }}>
              <p>
                This app was built for the National Park enthusiast who
                <br></br>
                is undeniably in love with the great outdoors.
              </p>

              <div className="Left">
                <h5 style={{ textAlign: "center" }}>Front End</h5>
                <ul
                  class="list-group list-group-flush"
                  style={{ textAlign: "center" }}
                >
                  <li class="list-group-item">React</li>
                  <li class="list-group-item">BootStrap</li>
                  <li class="list-group-item">JavaScript</li>
                </ul>
                <br></br>
              </div>
              <div className="Right">
                <h5 style={{ textAlign: "center" }}>Back End</h5>
                <ul
                  class="list-group list-group-flush"
                  style={{ textAlign: "center" }}
                >
                  <li class="list-group-item">Ruby on Rails</li>
                  <li class="list-group-item">PostgreSQL</li>
                  <li class="list-group-item">ActiveRecord</li>
                </ul>
                <br></br>
              </div>
            </div>
            <p
              style={{
                textAlign: "center",
                fontStyle: "italic",
                fontSize: "small",
              }}
            >
              Thank you to the National Parks Service for "caring for these
              <br></br>
              special places so that all may experience our heritage."
            </p>

            <p style={{ textAlign: "center", fontSize: "small" }}>
              Contact the developer{" "}
              <a href="mailto:jessica.triana.tx@gmail.com">here</a>.
            </p>
          </div>
        </div>
        <div className="ParkName">Grand Teton National Park</div>
      </div>
    );
  }
}

export default About;
