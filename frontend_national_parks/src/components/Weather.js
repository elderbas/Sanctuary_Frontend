import React, { Component } from "react";
import { FiSun } from "react-icons/fi";
import { MdWbSunny } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { FiCloud } from "react-icons/fi";
import { FiDroplet } from "react-icons/fi";

class Weather extends Component {
  state = {
    response: {},
    temp: localStorage.getItem("weatherTemp"),
    name: localStorage.getItem("modalCity"),
    modalState: localStorage.getItem("modalState"),
    humidity: localStorage.getItem("weatherHumidity"),
    wind: localStorage.getItem("weatherWind"),
    clouds: localStorage.getItem("weatherClouds"),
    sunrise: localStorage.getItem("formattedSunrise"),
    sunset: localStorage.getItem("formattedSunset"),
    description: localStorage.getItem("weatherDescription"),
    
  };

  render() {
    return (
      <div className="Weather">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          {this.state.name}, {this.state.modalState}
        </h1>
        <h5
          style={{
            textAlign: "center",
            fontWeight: "light",
            color: "dark gray",
          }}
        >
          Currently: {this.state.temp}°F
        </h5>
        <h5
          className="description"
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          {this.state.description}
        </h5>
        <h5
          style={{
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          <FiDroplet /> Humidity: {this.state.humidity}%
        </h5>
        <h5
          style={{
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          <FiWind /> Wind: {this.state.wind}mph
        </h5>
        <h5
          style={{
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          <FiCloud /> Cloud Cover: {this.state.clouds}%
        </h5>

        <h5
          style={{
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          <FiSun /> Sunrise: {this.state.sunrise}am
        </h5>
        <h5
          style={{
            fontWeight: "lighter",
            color: "dark gray",
          }}
        >
          <MdWbSunny /> Sunset: {this.state.sunset}pm
        </h5>
      </div>
    );
  }
}

export default Weather;
