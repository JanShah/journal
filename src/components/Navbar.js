import React, {Component} from 'react';
import {Toolbar,} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Navbar extends Component {

  render() {
		return (      
		<MuiThemeProvider>
			<Toolbar>
				{this.props.children}
			</Toolbar>
		</MuiThemeProvider>
    );
  }
}