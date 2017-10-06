import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Button(props){
	return <MuiThemeProvider>
		<FlatButton 
		label={props.label} 
		id={props.id}
		labelStyle={{color:props.color}} 
		backgroundColor={props.backgroundColor}
		hoverColor={props.hoverColor}
		onClick={props.onClick} 
		fullWidth={props.full}>{props.children}</FlatButton>
	</MuiThemeProvider>

}