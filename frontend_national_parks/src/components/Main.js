import React, { Component } from 'react';
import InnerNav from "./InnerNav";
import ParkList from "./ParkList";
import Calendar from "./Calendar";
import Weather from "./Weather";

class Main extends Component {
    render() {
        return (
            <div>
                <InnerNav userEmail={this.props.userEmail}/>
                <ParkList/>
                <Calendar/>
                <Weather/>
            </div>
        );
    }
}

export default Main;
