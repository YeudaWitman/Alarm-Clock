import React, { Component } from 'react';
import Digit from './Digit';
import Colon from './Colon';
import { generateTwoDigits } from './Helpers';

class Clock extends Component {

  constructor(props) {
    super(props);
    let now = new Date();
    this.state = {
      time: {hours: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds()}
    };
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    setInterval(this.setTime, 1000);
  }

  setTime() {
    let now = new Date();
    let time = {hours: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds()};
    this.setState({ time });
    if (this.props.alarmTime) {
      this.checkAlarmTime(time)
    }
  }

  checkAlarmTime(time) {
    //check if props isset or not null 
    let alarmTime = this.props.alarmTime;

    if (time.hours === alarmTime.hours && time.minutes === alarmTime.minutes) {
        this.props.popAlarm()
    }
  }

  render() {
    let digits = [];
    let stateTime = this.state.time;

    for (let index in stateTime) {
      digits.push(generateTwoDigits(stateTime[index]));
    }

    let digitsListJoin = digits.join('');
    let digitsList = digitsListJoin.split('');
    digitsList.splice(2, 0, ':');//add colon
    digitsList.splice(5, 0, ':');//add colon
    let renderList = digitsList.map((number, index) => {
      if (number === ':') {
        return <Colon key={index} />
      }
        return <Digit key={index} value={number} />;
    });
    
    return (
      <div className="clockContainer">
        {renderList}
      </div>
    )
  }
}

export default Clock;
