import React, { Component } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class Calendar extends Component {
  state = {
    date: new Date(),
  };

onClickDay = (value, event) => {
  alert('clicked day: ' , value)
  this.setState({ date: value})
}

  // onClick = (event) => {
  //   this.setState({
  //     startDate: event.target.value,
  //   });
  // };

  onChange = (date) => {
    this.setState({
      date
    });
  };

  render() {
    return (
      <div className="Calendar">
        <ReactCalendar
        onChange={this.onChange}
          value={this.state.date}


        

        />
      </div>
    );
  }
}

export default Calendar;
