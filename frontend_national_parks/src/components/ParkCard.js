import React, { Component } from 'react';

class ParkCard extends Component {
    render() {
        return (
            <div className="ParkCard">
                <img src={this.props.imageURL} alt={this.props.altText} className="parkCardImage"></img>
            </div>
        );
    }
}

export default ParkCard;
