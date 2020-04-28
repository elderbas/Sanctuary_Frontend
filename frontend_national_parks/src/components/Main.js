import React, { Component } from "react";
import InnerNav from "./InnerNav";
import ParkList from "./ParkList";
import Calendar from "./Calendar";
import Weather from "./Weather";

class Main extends Component {
  render() {
    return (
      <div
        className="Main"
        style={{ height: "100vh", backgroundColor: "whitesmoke" }}
      >
        <InnerNav
          userEmail={this.props.userEmail}
          user={this.props.currentUser}
        />
        <ParkList />
        <Calendar />
        <Weather />
      </div>
    );
  }
}

export default Main;
