import React from 'react';

const AlarmStatus = (props) => {

    if (props.alarmTime && props.alarmTime !== null) {
        return <div>Alarm on {props.alarmTime.hours} : {props.alarmTime.minutes}</div>;
      } else {
        return <div>Alarm not set yet.</div>;
    }
}

export default AlarmStatus;