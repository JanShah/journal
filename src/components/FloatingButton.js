import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Button(props){
	const style={
		float:'left',
		padding:'3px 3px 0px 4px', 
		border:'1px solid rgba(51,51,51,0.2)',
		margin:3
		
	}
	return <MuiThemeProvider>
		<div 
		id={props.id}
		onClick={props.onClick}
		style={style}
		>{props.label}</div>
	</MuiThemeProvider>
}