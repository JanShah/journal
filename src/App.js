import React, { Component } from 'react';
import './App.css';
import Navigation from './containers/Navigation'
import Main from './containers/Main'
import ActiveJournal from './containers/ActiveJournal'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div>
          <ActiveJournal />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
