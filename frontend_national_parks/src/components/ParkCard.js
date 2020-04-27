import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

class ParkCard extends Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false,
      date: [new Date(), new Date()],
      id: null,
    };
  }

  onChange = (date) => this.setState({ date });

  saveTrip = () => {
    fetch(`http://localhost:3000/trips`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        start_date: this.state.date[0],
        end_date: this.state.date[1],
 
      }),
    });
  };

  showModal = () => {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));

    this.setState({
      id: this.props.key
    })
  };

  render() {
    return (
      <div className="ParkCard"           key={this.props.key}>
        <img
          src={this.props.imageURL}
          alt={this.props.altText}
          className="parkCardImage"
          height="200px"
          width="200px"
          margin="5px"

          onClick={this.showModal}
        ></img>

        <Modal
          show={this.state.modalOpen}
          size="lg"
          dialogClassName={"primaryModal"}
        >
          <Modal.Header>
            <div
              className="ModalHeader"
              style={{
 
                fontSize: "30px",
                color: "dark grey",
                paddingLeft: "120px",
              }}
            >
              {this.props.fullName}
            </div>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.showModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body className="modalBody">
            <div className="modalImage" s>
              <img
                src={this.props.imageURL}
                alt={this.props.altText}
                height="400px"
                marginLeft="30px"
                paddingLeft="30px"
              ></img>
            </div>
            <div style={{ textAlign: "center", fontSize: "25px" }}>
              {" "}
              {this.props.city}, {this.props.state}
            </div>
            <div className="parkDescription">{this.props.description}</div>
            <div className="parkContactInfo">
              Select trip dates:
              <br></br>
              <br></br>
              <DateRangePicker
                onChange={this.onChange}
                value={this.state.date}
              />
              <br></br>
              <br></br>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                onClick={this.saveTrip}
              >
                Save Trip
              </button>
              <br></br>
              <br></br>
              {this.props.emailAddress}
              <br></br>
              {this.props.phoneNumber}
              <br></br>
              {this.props.website}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ParkCard;
