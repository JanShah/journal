import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Button(props){
	const style={
		padding:'3px 3px 0px 4px', 
		margin:3,
		cursor:'pointer'
	}
	return <MuiThemeProvider>
		<div 
		id={props.id}
		onClick={props.onClick}
		style={style}
		>{props.label}</div>
	</MuiThemeProvider>
}