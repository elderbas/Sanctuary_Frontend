import React, { Component } from "react";
import ParkCard from "./ParkCard";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class ParkList extends Component {
  constructor() {
    super();

    this.state = {
      parks: [],
      favorites: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/parks`)
      .then((response) => response.json())
      .then((parks) =>
        setTimeout(
          function () {
            this.setState({ parks });
          }.bind(this),
          2500
        )
      );
  }

  addToFavorites = (fullName) => {
    this.setState({favorites: [...this.state.favorites, fullName]})

  localStorage.setItem("favorites", this.state.favorites)
  console.log("favs", this.state.favorites)

  }


  render() {
    let parkList = this.state.parks;
    return (
      <div className="ParkList" style={{ backgroundColor: "whitesmoke" }}>
        <Loader
          style={{ zIndex: "9999" }}
          type="Rings"
          color="#6c757d"
          height={700}
          width={600}
          timeout={2500} //2.5 secs
        />
        {parkList.map((park) => (
          <ParkCard
            style={{ zIndex: "8888" }}
            key={park.id}
            parkId={park.id}
            imageURL={park.image1url}
            altText={park.image1altText}
            fullName={park.fullName}
            city={park.addresscity}
            state={park.addressstateCode}
            description={park.description}
            emailAddress={park.emailAddress}
            phoneNumber={park.phoneNumber}
            website={park.website}
            latLong={park.latLong}
            addToFavorites={this.addToFavorites}
          />
        ))}
      </div>
    );
  }
}

export default ParkList;
