import React, { Component } from 'react';
import Modal from './components/Modal';
import Clock from './components/Clock';
import Alarm from './components/Alarm';
import AlarmStatus from './components/AlarmStatus';
import './App.css';

class App extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
          modalStatus: false,
          alarmTime: null,
          alarm: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setAlarm = this.setAlarm.bind(this);
        this.removeAlarm = this.removeAlarm.bind(this);
        this.popAlarm = this.popAlarm.bind(this);
        this.closeAlarm = this.closeAlarm.bind(this);
    }

  componentDidMount () {
    this.loadAlarm();
  }
  
  loadAlarm () {
    if (localStorage.getItem('Alarm Time')) {
      let alarmTime = JSON.parse(localStorage.getItem('Alarm Time'));
      this.setState({alarmTime});
    }
  }

  setAlarm (tempAlarmTime) {
    localStorage.setItem('Alarm Time', JSON.stringify(tempAlarmTime));
    this.setState({alarmTime: tempAlarmTime});
    this.closeModal();
  }
  
  removeAlarm () {
    localStorage.removeItem('Alarm Time');
    this.setState({alarmTime: null});
    this.closeModal();
  }

  openModal() {
    this.setState({modalStatus: true});
  }

  closeModal() {
    this.setState({modalStatus: false});
  }

  popAlarm() {
    this.setState({alarm : true, modalStatus: false})
  }

  closeAlarm() {
    this.setState({alarm : false})
    this.removeAlarm();
  }

  render() {
    let modalButton;
    let modal;

    if (this.state.modalStatus) {
      modal = <Modal 
        modalStatus={this.state.modalStatus} 
        handleClose={this.closeModal} 
        setAlarm={this.setAlarm} 
        removeAlarm={this.removeAlarm}
        alarmTime={this.state.alarmTime}
        handleChange={this.handleChange}
        />;
    } else {
      modal = null;
      modalButton = <button id="openAlarmButton" className="alarmButton" onClick={this.openModal}>Alarm</button>;
    }

    return (
      <div id="container">
        <AlarmStatus alarmTime={this.state.alarmTime} />
        <Clock alarmTime={this.state.alarmTime} popAlarm={this.popAlarm}/>
        {modalButton}
        {modal}
        {this.state.alarm ? <Alarm closeAlarm={this.closeAlarm} setAlarm={this.setAlarm} alarmTime={this.state.alarmTime}/> : null}
      </div>
    );
  }


}

export default App;
