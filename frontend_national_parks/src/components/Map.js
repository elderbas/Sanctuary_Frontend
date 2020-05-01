import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static defaultProps = {
    center: {
      lat: 30.27,
      lng: -97.73,
    },
    zoom: 8,
  };

  handleUpdate = () => {
    let lati = parseFloat(localStorage.getItem("lat"));
    let lngi = parseFloat(localStorage.getItem("lon"));

    this.setState({ center: { lat: lati, lng: lngi } });
    console.log("updated", this.state.center);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="SimpleMap" style={{ height: "40vh", width: "30%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAeBgkRen0H1I488dOjqESVUkDiScJiXgA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChange={this.handleUpdate}
        >
          {/* <AnyReactComponent
            lat={30.27}
            lng={-97.73}
            text={localStorage.getItem("modalCity")}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
