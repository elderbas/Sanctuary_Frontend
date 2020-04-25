import React, { Component } from "react";
// import Forecast from "react-forecast";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        Weather Widget
        <ReactWeather
          forecast="today"
          apikey="ed44ba84387bb0539b31ae64430ef2a4"
          type="city"
          value="Austin"
        />
      </div>
    );
  }
}

export default Weather;
