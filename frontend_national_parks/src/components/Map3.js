import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
const style = {
    width: '30%',
    height: '30%',
    marginTop: '2%',
    marginLeft: '62%',
    position: 'fixed',  
  }
  const containerStyle = {
    position: 'absolute',  
    width: '30%',
    height: '30%',
    marginTop: '32%',
    marginLeft: '62%',
    display: "inline-block"
  }
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: Math.floor(localStorage.getItem("lat")),
        lng: Math.floor(localStorage.getItem("lon")),
      },
    };
  }

  

  displayMarker = () => {
    return (
      <Marker
        position={{
          lat: this.state.center.lat,
          lng: this.state.center.lng,
        }}
        onClick={() => console.log("You clicked me!")}
      />
    );
  };

  render() {
    return (
        <div className="Map">
        <Map
        // containerStyle={containerStyle}
            style={style}
          centerAroundCurrentLocation={true}
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: this.state.center.lat, lng: this.state.center.lng }}
        />
   </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAeBgkRen0H1I488dOjqESVUkDiScJiXgA",
})(MapContainer);
