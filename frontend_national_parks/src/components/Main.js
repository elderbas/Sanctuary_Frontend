import React, { Component } from "react";
import InnerNav from "./InnerNav";
import ParkList from "./ParkList";
import Weather from "./Weather";
import Video from "./Video";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentUserEmail: "",
      users: [],
      trips: [],
      userFirstName: "",
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

    let i = 0;
    this.setState({ user1Id: users[i].id });
    this.setState({ user1FirstName: users[i].first_name });
    this.setState({ user1LastName: users[i].last_name });
    this.setState({ user1Email: users[i].email });
    this.setState({ user1Zipcode: users[i].zipcode });
    this.setState({ user1Birthday: users[i].birthday });

    localStorage.setItem(`user${i}FirstName`, this.state.user1FirstName);
    localStorage.setItem(`user${i}LastName`, this.state.user1LastName);
    localStorage.setItem(`user${i}Zipcode`, this.state.user1Zipcode);
    localStorage.setItem(`user${i}Birthday`, this.state.user1Birthday);

    i = 1;
    this.setState({ user2Id: users[i].id });
    this.setState({ user2FirstName: users[i].first_name });
    this.setState({ user2LastName: users[i].last_name });
    this.setState({ user2Email: users[i].email });
    this.setState({ user2Zipcode: users[i].zipcode });
    this.setState({ user2Birthday: users[i].birthday });

    localStorage.setItem(`user${i}FirstName`, this.state.user2FirstName);
    localStorage.setItem(`user${i}LastName`, this.state.user2LastName);
    localStorage.setItem(`user${i}Zipcode`, this.state.user2Zipcode);
    localStorage.setItem(`user${i}Birthday`, this.state.user2Birthday);

    i = 2;
    this.setState({ user3Id: users[i].id });
    this.setState({ user3FirstName: users[i].first_name });
    this.setState({ user3LastName: users[i].last_name });
    this.setState({ user3Email: users[i].email });
    this.setState({ user3Zipcode: users[i].zipcode });
    this.setState({ user3Birthday: users[i].birthday });

    localStorage.setItem(`user${i}FirstName`, this.state.user3FirstName);
    localStorage.setItem(`user${i}LastName`, this.state.user3LastName);
    localStorage.setItem(`user${i}Zipcode`, this.state.user3Zipcode);
    localStorage.setItem(`user${i}Birthday`, this.state.user3Birthday);

    i = 3;
    this.setState({ user4Id: users[i].id });
    this.setState({ user4FirstName: users[i].first_name });
    this.setState({ user4LastName: users[i].last_name });
    this.setState({ user4Email: users[i].email });
    this.setState({ user4Zipcode: users[i].zipcode });
    this.setState({ user4Birthday: users[i].birthday });

    localStorage.setItem(`user${i}FirstName`, this.state.user4FirstName);
    localStorage.setItem(`user${i}LastName`, this.state.user4LastName);
    localStorage.setItem(`user${i}Zipcode`, this.state.user4Zipcode);
    localStorage.setItem(`user${i}Birthday`, this.state.user4Birthday);

    i = 4;
    this.setState({ user5Id: users[i].id });
    this.setState({ user5FirstName: users[i].first_name });
    this.setState({ user5LastName: users[i].last_name });
    this.setState({ user5Email: users[i].email });
    this.setState({ user5Zipcode: users[i].zipcode });
    this.setState({ user5Birthday: users[i].birthday });

    localStorage.setItem(`user${i}FirstName`, this.state.user5FirstName);
    localStorage.setItem(`user${i}LastName`, this.state.user5LastName);
    localStorage.setItem(`user${i}Zipcode`, this.state.user5Zipcode);
    localStorage.setItem(`user${i}Birthday`, this.state.user5Birthday);
  };

  render() {
    return (
      <div
        className="Main"
        style={{ height: "500vh", backgroundColor: "whitesmoke" }}
      >
        <InnerNav user={this.state.userFirstName} />
        <ParkList />
        <Weather />
        <Video />
      </div>
    );
  }
}

export default Main;
