import React from 'react';
import './Alarm.css';

const snoozeTime = 5; //[in minutes]

const Alarm = (props) => {

    function setSnooze() {
        if (!props.alarmTime) {
            return;
        }
        let {hours, minutes} = props.alarmTime;
        //advance to next hour
        props.setAlarm({hours, minutes: minutes + snoozeTime});
        props.closeAlarm();
    }

    return (
        <div id="coverBackground">
            <div id="alarmContainer">         
                <button className="alarmButton" onClick={setSnooze}>Snooze</button>
                <button className="alarmButton" onClick={props.closeAlarm}>Cancel alarm</button>
                <div id="bellContainer">
                    <i id="bellIcon" className="fas fa-bell"></i>
                </div>  
            </div>
        </div>
    )
}

export default Alarm;