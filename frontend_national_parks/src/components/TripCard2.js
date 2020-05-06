import React, { Component } from "react";
import Moment from "react-moment";

class TripCard2 extends Component {
  render() {
    return (
      <div className="TripCard">
        <h4>Big Bend National Park</h4>
        <h4 style={{ fontWeight: "lighter" }}>
          <Moment format="MMM DD, YYYY">May 12, 2020</Moment> -{" "}
          <Moment format="MMM DD, YYYY">May 16, 2020</Moment>
        </h4>
        <span>
          <button
            type="button"
            className="btn btn-outline-secondary btn-xs mr-3 "
          >
            Edit Trip
          </button>
          <span>
            <button
              type="button"
              className="btn btn-secondary btn-xs mr-1 "
              onClick={() => this.props.deleteTrip(this.props.id)}
            >
              Delete Trip
            </button>
          </span>
        </span>

        <br></br>
        <br></br>

        <h4>Rocky Mountain National Park</h4>
        <h4 style={{ fontWeight: "lighter" }}>
          <Moment format="MMM DD, YYYY">Jun 1, 2020</Moment> -{" "}
          <Moment format="MMM DD, YYYY">Jun 5, 2020</Moment>
        </h4>
        <span>
          <button
            type="button"
            className="btn btn-outline-secondary btn-xs mr-3 "
          >
            Edit Trip
          </button>
          <span>
            <button
              type="button"
              className="btn btn-secondary btn-xs mr-1 "
              onClick={() => this.props.deleteTrip(this.props.id)}
            >
              Delete Trip
            </button>
          </span>
        </span>

        <br></br>
        <br></br>

        <h4>Sequoia National Park</h4>
        <h4 style={{ fontWeight: "lighter" }}>
          <Moment format="MMM DD, YYYY">Jul 8, 2020</Moment> -{" "}
          <Moment format="MMM DD, YYYY">Jul 11, 2020</Moment>
        </h4>
        <span>
          <button
            type="button"
            className="btn btn-outline-secondary btn-xs mr-3 "
          >
            Edit Trip
          </button>
          <span>
            <button
              type="button"
              className="btn btn-secondary btn-xs mr-1 "
              onClick={() => this.props.deleteTrip(this.props.id)}
            >
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

export default TripCard2;
