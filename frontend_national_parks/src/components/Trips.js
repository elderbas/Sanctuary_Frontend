import React, { Component } from "react";
import InnerNav from "./InnerNav";

class Trips extends Component {
  state = {
    trips: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/trips`)
    .then(response => response.json())
    .then(trips => this.setState({ trips}))
  }


  render() {
    console.log(this.state.trips)
    return (
      <div>
        <InnerNav />
        <br></br>

        <div className="TripsBackgroundImage">
          <div className="TripsPhrase">
            You have quite<br></br> the adventure<br></br> planned...
          </div>
          <div className="TripsList">

            <h4>{this.state.trips[0].park.fullName}</h4>
            <h4 style={{ fontWeight: "lighter" }}>Trip Dates</h4>
            <span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mr-3"
              >
                Edit Trip
              </button>
            </span>

            <span>
              <button type="button" class="btn btn-secondary btn-sm mr-1">
                Delete Trip
              </button>
            </span>
            <br></br><br></br>
            <h4>National Park Full Name</h4>
            <h4 style={{ fontWeight: "lighter" }}>Trip Dates</h4>
            <span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mr-3"
              >
                Edit Trip
              </button>
            </span>

            <span>
              <button type="button" class="btn btn-secondary btn-sm mr-1">
                Delete Trip
              </button>
            </span>
            <br></br><br></br>
            <h4>National Park Full Name</h4>
            <h4 style={{ fontWeight: "lighter" }}>Trip Dates</h4>
            <span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mr-3"
              >
                Edit Trip
              </button>
            </span>

            <span>
              <button type="button" class="btn btn-secondary btn-sm mr-1">
                Delete Trip
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Trips;
