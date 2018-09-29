import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import './Calendar.css';

function onDatePicked(date) {
  alert(date);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nasty Catzz</h1>
        </header>
        <Calendar year={2018} onPickDate={onDatePicked} />
      </div>
    );
  }
}

export default App;
