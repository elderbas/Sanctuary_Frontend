import React, { Component } from "react";
import ParkCard from "./ParkCard";

class ParkList extends Component {
  constructor() {
    super();

    this.state = {
      parks: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/parks`)
      .then((response) => response.json())
      .then((parks) => this.setState({ parks }));
  }
  render() {
    let parkList = this.state.parks;
    return (
      <div className="ParkList">
        {parkList.map((park) => (
          <ParkCard
            key={park.id}
            imageURL={park.image1url}
            altText={park.image1altText}
            fullName={park.fullName}
            city={park.addresscity}
            state={park.addressstateCode}
            description={park.description}
            emailAddress={park.emailAddress}
            phoneNumber={park.phoneNumber}
            website={park.website}
          />
        ))}
      </div>
    );
  }
}

export default ParkList;
