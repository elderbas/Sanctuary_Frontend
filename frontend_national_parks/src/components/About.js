import React, { Component } from "react";
import InnerNav from "./InnerNav";
import { Link } from "react-router-dom";



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
              {" "}
              About Sanctuary
            </h1>
            <div style={{ textAlign: "center" }}>
              <br></br>
              This app was built for the National Park enthusiast who
              <br></br>
              is undeniably in love with the great outdoors.
              <br></br>
              <br></br>
              <br></br>
              <div className="Left">
                <h4 style={{ textAlign: "center" }}>Front End</h4>
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
                <h4 style={{ textAlign: "center" }}>Back End</h4>
                <ul
                  class="list-group list-group-flush"
                  style={{ textAlign: "center" }}
                >
                  <li class="list-group-item">Ruby on Rails</li>
                  <li class="list-group-item">PostreSQL</li>
                  <li class="list-group-item">ActiveRecord</li>
                </ul>
                <br></br>
               
              </div>
            </div>
            Special thanks to the National Parks Service for "caring for these
            <br></br>
            special places so that all may experience our heritage."
            <br></br><br></br>
            <p style={{ textAlign: "center", fontSize: "small" }}>
            Contact the developer <a href="mailto:jessica.triana.tx@gmail.com">here</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
