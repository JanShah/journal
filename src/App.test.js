import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Paper from './Components/Paper';
import Button from './Components/Button';
//https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('creates a paper element', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paper />, div);
});


it('creates a valid Button element', () => {
  const div = document.createElement('div');
  const button = <Button 
  label={'test label'} 
  id={'test'}
  labelStyle={{color:'blue'}} 
  backgroundColor={'yellow'}
  hoverColor={'green'}
  onClick={()=>{console.log('clicked')}} 
  fullWidth={true}>'test'
  </Button>
  ReactDOM.render(button, div);
});

