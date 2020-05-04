import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import InnerNav from "./InnerNav";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        {
          latitude: 38.72261844,
          longitude: -109.5863666,
          name: "Arches National Park",
        },
        {
          latitude: 43.68584846,
          longitude: -102.482942,
          name: "Badlands National Park",
        },
        {
          latitude: 29.29817767,
          longitude: -103.2297897,
          name: "Big Bend National Park",
        },
        {
          latitude: 38.57779869,
          longitude: -107.7242756,
          name: "Black Canyon Of The Gunnison National Park",
        },
        {
          latitude: 37.58399144,
          longitude: -112.1826689,
          name: "Bryce Canyon National Park",
        },
        {
          latitude: 38.24555783,
          longitude: -109.8801624,
          name: "Canyonlands National Park",
        },
        {
          latitude: 32.14089463,
          longitude: -104.5529688,
          name: "Carlsbad Caverns National Park",
        },
        {
          latitude: 42.94065854,
          longitude: -122.1338414,
          name: "Crater Lake National Park",
        },
        {
          latitude: 41.26093905,
          longitude: -81.57116722,
          name: "Cuyahoga Valley National Park",
        },
        {
          latitude: 24.628741,
          longitude: -82.87319,
          name: "Dry Tortugas National Park",
        },

        {
          latitude: 25.37294225,
          longitude: -80.88200301,
          name: "Everglades National Park",
        },
        {
          latitude: 38.6258069,
          longitude: -90.1892508,
          name: "Gateway Arch National Park",
        },
        {
          latitude: 58.80086718,
          longitude: -136.8407579,
          name: "Glacier Bay National Park & Preserve",
        },
        {
          latitude: 48.68414678,
          longitude: -113.8009306,
          name: "Glacier National Park",
        },
        {
          latitude: 38.94617378,
          longitude: -114.2579782,
          name: "Great Basin National Park",
        },
        {
          latitude: 37.79256812,
          longitude: -105.5919572,
          name: "Great Sand Dunes National Park & Preserve",
        },
        {
          latitude: 34.52414366,
          longitude: -93.06332936,
          name: "Hot Springs National Park",
        },
        {
          latitude: 41.63765525,
          longitude: -87.09647445,
          name: "Indiana Dunes National Park",
        },
        {
          latitude: 59.81804414,
          longitude: -150.106502,
          name: "Kenai Fjords National Park",
        },
        {
          latitude: 40.49354575,
          longitude: -121.4075993,
          name: "Lassen Volcanic National Park",
        },

        {
          latitude: 37.19760458,
          longitude: -86.1309019,
          name: "Mammoth Cave National Park",
        },
        {
          latitude: 46.86075416,
          longitude: -121.7043885,
          name: "Mount Rainier National Park",
        },
        {
          latitude: 40.6631915953388,
          longitude: -74.0451049804688,
          name: "National Parks of New York Harbor",
        },
        {
          latitude: 34.98387664,
          longitude: -109.7877678,
          name: "Petrified Forest National Park",
        },
        {
          latitude: 40.3556924,
          longitude: -105.697287,
          name: "Rocky Mountain National Park",
        },
        {
          latitude: 36.71277299,
          longitude: -118.587429,
          name: "Sequoia & Kings Canyon National Parks",
        },
        {
          latitude: 47.17777274,
          longitude: -103.4300083,
          name: "Theodore Roosevelt National Park",
        },
        {
          latitude: 18.34279656,
          longitude: -64.74194451,
          name: "Virgin Islands National Park",
        },
        {
          latitude: 32.77907858,
          longitude: -106.3333461,
          name: "White Sands National Park",
        },
        {
          latitude: 38.93854526,
          longitude: -77.265089,
          name: "Wolf Trap National Park for the Performing Arts",
        },

        {
          latitude: 61.4182147,
          longitude: -142.6028439,
          name: "Wrangell - St Elias National Park & Preserve",
        },
        {
          latitude: 44.59824417,
          longitude: -110.5471695,
          name: "Yellowstone National Park",
        },
        {
          latitude: 37.84883288,
          longitude: -119.5571873,
          name: "Yosemite National Park",
        },
        {
          latitude: 25.490587,
          longitude: -80.21023851,
          name: "Biscayne National Park",
        },
        {
          latitude: 38.2821653130533,
          longitude: -111.247048377991,
          name: "Capitol Reef National Park",
        },
        {
          latitude: 33.98680093,
          longitude: -119.9112735,
          name: "Channel Islands National Park",
        },
        {
          latitude: 33.79187523,
          longitude: -80.74867805,
          name: "Congaree National Park",
        },
        {
          latitude: 36.48753731,
          longitude: -117.134395,
          name: "Death Valley National Park",
        },
        {
          latitude: 63.29777484,
          longitude: -151.0526568,
          name: "Denali National Park & Preserve",
        },
        {
          latitude: 36.17280161,
          longitude: -112.6836024,
          name: "Grand Canyon National Park",
        },

        {
          latitude: 43.81853565,
          longitude: -110.7054666,
          name: "Grand Teton National Park",
        },
        {
          latitude: 35.60116374,
          longitude: -83.50818326,
          name: "Great Smoky Mountains National Park",
        },
        {
          latitude: 20.70693015,
          longitude: -156.1591775,
          name: "Haleakal National Park",
        },
        {
          latitude: 19.3355036,
          longitude: -155.4700257,
          name: "Hawai'i Volcanoes National Park",
        },
        {
          latitude: 48.01145819,
          longitude: -88.82780657,
          name: "Isle Royale National Park",
        },
        {
          latitude: 33.91418525,
          longitude: -115.8398125,
          name: "Joshua Tree National Park",
        },
        {
          latitude: 58.62235668,
          longitude: -155.0126574,
          name: "Katmai National Park & Preserve",
        },
        {
          latitude: 67.35631336,
          longitude: -159.2002293,
          name: "Kobuk Valley National Park",
        },
        {
          latitude: 60.57405857,
          longitude: -153.55535,
          name: "Lake Clark National Park & Preserve",
        },
        {
          latitude: 37.23908345,
          longitude: -108.4624032,
          name: "Mesa Verde National Park",
        },
        {
          latitude: -14.22865935,
          longitude: -169.8503777,
          name: "National Park of American Samoa",
        },
        {
          latitude: 48.71171756,
          longitude: -121.2069423,
          name: "North Cascades National Park",
        },
        {
          latitude: 47.80392754,
          longitude: -123.6663848,
          name: "Olympic National Park",
        },
        {
          latitude: 36.49029208,
          longitude: -121.1813607,
          name: "Pinnacles National Park",
        },
        {
          latitude: 32.20909636,
          longitude: -110.7574974,
          name: "Saguaro National Park",
        },
        {
          latitude: 38.49236644,
          longitude: -78.46907715,
          name: "Shenandoah National Park",
        },
        {
          latitude: 43.58012365,
          longitude: -103.4394709,
          name: "Wind Cave National Park",
        },
        {
          latitude: 37.29839254,
          longitude: -113.0265138,
          name: "Zion National Park",
        },
      ],
    };
  }

  handleClick = (event) => {
    alert(event.target.name);
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          title={store.name}
          name={store.name}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => alert(store.name)}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <InnerNav />
        <Map
          google={this.props.google}
          zoom={4}
          style={mapStyles}
          initialCenter={{ lat: 39.8283, lng: -109.5795 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAeBgkRen0H1I488dOjqESVUkDiScJiXgA",
})(MapContainer);
