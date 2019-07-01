import React from 'react';
import './Modal.css';
import AlarmStatus from './AlarmStatus';

const Modal = (props) => {
  let tempAlarmTime;
  
  function handleChange (event) {
    let formatTime = event.target.value.split(':');
    tempAlarmTime = {hours: +formatTime[0], minutes: +formatTime[1]}; //the + sign is to convert string to int
  }

  function handleSetAlarm () {
    //validate time input
    if (!tempAlarmTime) {
      return;
    }
    props.setAlarm(tempAlarmTime);
  }

  return (
      <div className="modal-main">
        <div className="modal-header"><AlarmStatus /></div>
        <div className="modal-body">
          <div>Select Time:</div>
          <input id="timePicker" type="time" onChange={handleChange} />
        </div>
        <div className="modal-footer">
          <button className="alarmButton" onClick={props.handleClose}>Close</button>
          <button className="alarmButton" onClick={handleSetAlarm}>Set Alarm</button>
          <button className="alarmButton" onClick={props.removeAlarm}>Remove Alarm</button>
        </div>
      </div>
  );
}

export default Modal;