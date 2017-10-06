import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 'calc(100% - 20px)',
  width: 'calc(100% - 20px)',
  marginTop: 5,
	marginBottom: 5,
	marginLeft:5,
  textAlign: 'left',
  display: 'inline-block',
};

const PaperMain = (props) => (
  <MuiThemeProvider>
    <Paper style={style} zDepth={1}>{props.children}</Paper>
  </MuiThemeProvider>
);

export default PaperMain;