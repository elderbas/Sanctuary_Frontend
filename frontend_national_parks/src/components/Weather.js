import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <a
          class="weatherwidget-io"
          href="https://forecast7.com/en/30d27n97d74/austin/?unit=us"
          data-label_1="AUSTIN"
          data-label_2="WEATHER"
          data-font="Open Sans"
          data-icons="Climacons"
          data-theme="pure"
        >
          AUSTIN WEATHER
        </a>
      </div>
    );
  }
}

export default Weather;
