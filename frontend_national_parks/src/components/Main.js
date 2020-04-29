import React, { Component } from "react";
import InnerNav from "./InnerNav";
import ParkList from "./ParkList";
import Calendar from "./Calendar";
import Weather from "./Weather";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentUserEmail: "",
      users: [],
      trips: [],
      user: "",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ users }));
    this.setState({
      currentUserEmail: localStorage.getItem("currentUserEmail"),
    });
  }

  getUser = () => {
    const users = this.state.users;
    console.log("users from main", users);
    console.log("first user from main", users[0]);

    users.map((user) => {
      this.setState({ userId: user.id });
      this.setState({ userFirstName: user.first_name });
    });
  };

  render() {
    this.getUser();
    return (
      <div
        className="Main"
        style={{ height: "500vh", backgroundColor: "whitesmoke" }}
      >
        <InnerNav />
        <ParkList />
        <Weather />
        <Calendar />
      </div>
    );
  }
}

export default Main;
