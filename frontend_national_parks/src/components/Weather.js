import React, { Component } from "react";
// import Forecast from "react-forecast";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";

class Weather extends Component {
  render() {
    let apikey = "ed44ba84387bb0539b31ae64430ef2a4";

    return (
      <div className="Weather">
        <ReactWeather forecast="today" apikey={apikey} type="auto" />
      </div>
    );
  }
}

export default Weather;
