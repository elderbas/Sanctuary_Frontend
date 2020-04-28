import React, { Component } from "react";
import InnerNav from "./InnerNav";
import ParkList from "./ParkList";
import Calendar from "./Calendar";
import Weather from "./Weather";

class Main extends Component {

  componentDidMount() {
    let token = localStorage.getItem("token");
    console.log("token is", token);
    
    fetch(`http://localhost:3000/current_user`, {
      method: "GET",
      headers: {
        Authorization: `Token ` + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("current user", data);
      });
  }

  render() {
    return (
      <div
        className="Main"
        style={{ height: "500vh", backgroundColor: "whitesmoke" }}
      >
        <InnerNav
          userEmail={this.props.userEmail}
          user={this.props.currentUser}
        />
        <ParkList />
        <Weather />
        <Calendar />
      </div>
    );
  }
}

export default Main;
