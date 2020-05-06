import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

class ParkCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      date: [new Date(), new Date()],
      parkId: null,
      heartfill: false,
    };
  }

  onChange = (date) => this.setState({ date });

  saveTrip = () => {
    fetch(`http://localhost:3000/trips`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        start_date: this.state.date[0],
        end_date: this.state.date[1],
      }),
    });
  };

  showModal = () => {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
    this.setState({ city: this.props.city });
    localStorage.setItem("modalCity", this.props.city);
    localStorage.setItem("modalState", this.props.state);
    this.getWeather();
  };

  getWeather = () => {
    let latLong = this.props.latLong;
    let newLatLong = latLong.split(", ");
    let lat = newLatLong[0].slice(5, -1);
    localStorage.setItem("lat", lat);
    let lon = newLatLong[1].slice(5, -1);
    localStorage.setItem("lon", lon);

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=124f605357a675f00becfb832b5d9e3f&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => this.setWeather(data));
  };

  setWeather = (data) => {
    localStorage.setItem("weatherTemp", Math.floor(data.main.temp));
    localStorage.setItem("weatherHumidity", data.main.humidity);
    localStorage.setItem("weatherWind", Math.floor(data.wind.speed));
    localStorage.setItem("weatherClouds", data.clouds.all);
    localStorage.setItem("weatherDescription", data.weather[0].description);

    localStorage.setItem("sunrise", data.sys.sunrise);
    let unix_sunrise = localStorage.getItem("sunrise");
    var sunrise_date = new Date(unix_sunrise * 1000);
    var sunrise_hours = sunrise_date.getHours();
    var sunrise_minutes = "0" + sunrise_date.getMinutes();
    var formattedSunrise = sunrise_hours + ":" + sunrise_minutes.substr(-2);
    localStorage.setItem("formattedSunrise", formattedSunrise);

    localStorage.setItem("sunset", data.sys.sunset);
    let unix_sunset = localStorage.getItem("sunset");
    var sunset_date = new Date(unix_sunset * 1000);
    var sunset_hours = sunset_date.getHours() - 12;
    var sunset_minutes = "0" + sunset_date.getMinutes();
    var formattedSunset = sunset_hours + ":" + sunset_minutes.substr(-2);
    localStorage.setItem("formattedSunset", formattedSunset);
  };

  render() {
    return (
      <div className="ParkCard">
        <h5 style={{ fontSize: "8px", textAlign: "center" }}>
          {this.props.fullName}
        </h5>

        <img
          src={this.props.imageURL}
          alt={this.props.altText}
          className="parkCardImage"
          height="200px"
          width="200px"
          margin="5px"
          onClick={this.showModal}
        ></img>

        <Modal
          show={this.state.modalOpen}
          size="lg"
          dialogClassName={"primaryModal"}
        >
          <Modal.Header>
            <div
              className="ModalHeader"
              style={{
                fontSize: "30px",
                color: "dark grey",
                paddingLeft: "120px",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "lighter",
                  color: "dark gray",
                }}
              >
                {this.props.fullName}
              </h1>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.showModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <div className="modalImage">
              <img
                src={this.props.imageURL}
                alt={this.props.altText}
                height="400px"
                marginleft="30px"
                paddingleft="30px"
              ></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "25px" }}>
              {" "}
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "lighter",
                  color: "dark gray",
                }}
              >
                {this.props.city}, {this.props.state}
              </h3>
            </div>
            <div className="parkDescription">{this.props.description}</div>
            <div className="parkContactInfo">
              Add to Favorites{" "}
              <svg
                class="bi bi-heart"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
                  clip-rule="evenodd"
                />
              </svg>
              <h5
                className="SelectDates"
                style={{
                  fontWeight: "lighter",
                  color: "black",
                }}
              >
                Select trip dates:
              </h5>
              <DateRangePicker
                onChange={this.onChange}
                value={this.state.date}
              />
              <br />
              <button
                type="button"
                className="btn btn-outline-secondary btn-xs"
                onClick={this.saveTrip}
              >
                Save Trip
              </button>
              <br></br>
              <br></br>
              <a href={`mailto:${this.props.emailAddress}`}>Direct Email </a>
              <svg
                className="bi bi-envelope"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                  clipRule="evenodd"
                />
                <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
              </svg>
              <br></br>
              {this.props.phoneNumber}
              <svg
                className="bi bi-phone"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M8 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <br></br>
              <a href={this.props.website}>{this.props.fullName} Website </a>
              <svg
                className="bi bi-info-circle"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                  clipRule="evenodd"
                />
                <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                <circle cx="8" cy="4.5" r="1" />
              </svg>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ParkCard;
