import React, { Component } from 'react';
import InnerNav from "./InnerNav";
import ParkList from "./ParkList";
import Calendar from "./Calendar";
import Weather from "./Weather";

class Main extends Component {
    render() {
        return (
            <div>
                <InnerNav/>
                <br></br>
                Main Page
                <br></br>
                Shows park cards, calendar, weather
                <ParkList/>
                <Calendar/>
                <Weather/>
            </div>
        );
    }
}

export default Main;
