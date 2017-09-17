import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Link} from 'react-router'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li><Link to="About">About</Link></li>
          <li><Link to="Inbox">Inbox</Link></li>
        </ul>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
