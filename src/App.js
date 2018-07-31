import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Mars from './Mars';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router><Dashboard /></Router> 

    );
  }
}

export default App;
