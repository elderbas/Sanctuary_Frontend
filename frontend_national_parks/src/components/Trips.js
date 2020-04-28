import React, { Component } from "react";
import InnerNav from "./InnerNav";

class Trips extends Component {
  state = {
    currentUser: "",
    trips: [],
    userTrips: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/trips`)
      .then((response) => response.json())
      .then((trips) => this.setState({ trips }));
  }

  populateUserTrips = () => {
    let userTrips = this.state.trips.filter(
      (trip) => trip.user.first_name === this.state.currentUser
    );
    this.setState({ userTrips: userTrips });
  };

  render() {
    console.log(this.state.trips);
    return (
      <div>
        <InnerNav />
        <br></br>

        <div className="TripsBackgroundImage">
          <div className="TripsPhrase">
            You have quite<br></br> the adventure<br></br> planned...
          </div>
          <div className="TripsList">
            <h4>Yosemite National Park</h4>
            <h4 style={{ fontWeight: "lighter" }}>May 5 - 8, 2021</h4>
            <span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-xs mr-3 "
              >
                Edit Trip
              </button>
              <span>
                <button type="button" class="btn btn-secondary btn-xs mr-1 ">
                  Delete Trip
                </button>
              </span>
            </span>

            <br></br>
            <br></br>
            <h4>Sequoia & Kings Canyon</h4>
            <h4 style={{ fontWeight: "lighter" }}>May 9 - 11, 2021</h4>

            <span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-xs mr-3 "
              >
                Edit Trip
              </button>
            </span>
            <span>
              <button type="button" class="btn btn-secondary btn-xs mr-1 ">
                Delete Trip
              </button>
            </span>

            <br></br>
            <br></br>
            <h4>Death Valley National Park</h4>
            <h4 style={{ fontWeight: "lighter" }}>May 12 - 14, 2021</h4>
            <span>
              <button
                type="button"
                class="btn btn-outline-secondary btn-xs mr-3 "
              >
                Edit Trip
              </button>
              <span>
                <button type="button" class="btn btn-secondary btn-xs mr-1 ">
                  Delete Trip
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Trips;
