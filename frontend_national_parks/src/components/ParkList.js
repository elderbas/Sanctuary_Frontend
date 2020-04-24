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
      <div>
        <div>
          {parkList.map((park) => (
            <ParkCard
              key={park.id}
              imageURL={park.image1url}
              altText={park.image1altText}
            />
          ))}
          Park List Container holding all park cards
        </div>
      </div>
    );
  }
}

export default ParkList;
