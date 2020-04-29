import React, { Component } from "react";
import Moment from "react-moment";

class TripCard extends Component {
  render() {
    return (
      <div className="TripCard">
        <h4>{this.props.parkName}</h4>
        <h4 style={{ fontWeight: "lighter" }}>
          <Moment format="MMM DD, YYYY">{this.props.startDate}</Moment> -{" "}
          <Moment format="MMM DD, YYYY">{this.props.endDate}</Moment>
        </h4>
        <span>
          <button
            type="button"
            className="btn btn-outline-secondary btn-xs mr-3 "
          >
            Edit Trip
          </button>
          <span>
            <button type="button" className="btn btn-secondary btn-xs mr-1 ">
              Delete Trip
            </button>
          </span>
        </span>

        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TripCard;
