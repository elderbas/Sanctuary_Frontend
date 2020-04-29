import React, { Component } from "react";
import InnerNav from "./InnerNav";
import TripCard from "./TripCard";


class Trips extends Component {
  constructor() {
    super();

    this.state = {
      currentUserEmail: "",
      trips: [],
      userTrips: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/trips`)
      .then((response) => response.json())
      .then((trips) => 
      setTimeout(
        function () {        
   this.setState({ trips });
      }.bind(this), 
      3000
      )
      )
    this.setState({
      currentUserEmail: localStorage.getItem("currentUserEmail")
    })
  }

  // componentDidUpdate(){
  //   fetch(`http://localhost:3000/trips`)
  //   .then((response) => response.json())
  //   .then((trips) => this.setState({ trips }));
  // }

  render() {
    let tripList = this.state.trips.slice(0,3);

    console.log("tripList is", tripList)
    return (
      <div>
        <InnerNav />
        <br></br>

        <div className="TripsBackgroundImage">
          <div className="TripsPhrase">
            You have quite<br></br> the adventure<br></br> planned...
          </div>
          <div className="TripsList">
            {tripList.map((trip) => {
              if ( this.state.currentUserEmail === trip.user.email) {
                return (
                  <TripCard
                    key={trip.id}
                    parkName={trip.park.fullName}
                    startDate={trip.start_date}
                    endDate={trip.end_date}
                  />
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Trips;
