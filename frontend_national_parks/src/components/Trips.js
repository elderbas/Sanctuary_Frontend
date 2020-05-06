import React, { Component } from "react";
import InnerNav from "./InnerNav";
import TripCard from "./TripCard";
import TripCard2 from "./TripCard2";

class Trips extends Component {
  constructor() {
    super();

    this.state = {
      userEmail: "",
      trips: [],
      userTrips: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/trips`)
      .then((response) => response.json())
      .then((trips) => this.setState({ trips }));
    this.setState({
      userEmail: localStorage.getItem("userEmail"),
    });
  }

  deleteTrip = (trip) => {
    alert("Trip Deleted");
    const body = { id: trip };

    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    this.setState({
      state: this.state,
    });

    fetch(`http://localhost:3000/trips/${trip}`, configObj);
  };

  render() {
    let tripList = this.state.trips;

    return (
      <div>
        <InnerNav />
        <br></br>

        <div className="TripsBackgroundImage">
          <div className="TripsPhrase">
            You have quite<br></br> the adventure<br></br> ahead...
          </div>
          <div className="TripsList">
          <TripCard2/>
            {/* {tripList.map((trip) => {
              if (this.state.userEmail === trip.user.email) {
                return (
                  // <TripCard
                  //   key={trip.id}
                  //   id={trip.id}
                  //   parkName={trip.park.fullName}
                  //   startDate={trip.start_date}
                  //   endDate={trip.end_date}
                  //   deleteTrip={this.deleteTrip}
                  // />

               
                );
              } else {
                return null;
              }
            })} */}
          </div>
        </div>
        <div className="ParkName">Arches National Park</div>
      </div>
    );
  }
}

export default Trips;
