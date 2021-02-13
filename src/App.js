import React, { Component } from 'react';
import './App.css';
import Navigation from './containers/Navigation'
import Main from './containers/Main'
import ActiveJournal from './containers/ActiveJournal'
import ActiveEntry from './containers/ActiveEntry'
class App extends Component {

  state = {
    editing: false
  }

  handleEditing(isEditing = false) {
    this.setState({ editing: isEditing });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation isEditing={this.state.editing}/>
        </header>
        <div>
          {this.state.editing?"":<ActiveJournal />}
          <Main />
          <ActiveEntry handleEditing={this.handleEditing.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
