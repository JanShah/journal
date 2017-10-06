import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Paper from './Components/Paper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('creates a paper element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paper />, div);
});
