import React, { Component } from "react";
import HomeNavBar from "./HomeNavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeNavBar />
        <div className="HomeBackgroundImage"></div>
        <div className="SanctuarySign">Sanctuary</div>
        <p className="Tagline">
          An effortless way to plan a National Park getaway
        </p>
        <div className="ParkName">Yellowstone National Park</div>
      </div>
    );
  }
}

export default Home;
