import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './containers/Navigation'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
