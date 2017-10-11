import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class PaperMain extends Component {

	constructor(props) {
		super(props)
		this.state={
			depth:0,
		}
		const half = 'calc(50% - 20px)'
		const full = 'calc(100% - 20px)'
		const width =window.innerWidth<600?full:half
		this.style = {
			width: width,
			marginTop: 5,
			marginBottom: 5,
			marginLeft:5,
			padding:'5px 0 20px 20px',
			textAlign: 'left',
			display: 'block',
			float:'left',
			...props.style
		};
	}

	handleMouseOver(){
		this.setState({
			depth:3
		})
	}
	handleMouseOut(){
		this.setState({
			depth:0
		})
	}
	render(props) {
		return <MuiThemeProvider>
			{this.props.plain?<Paper 
				onMouseOver={()=>this.handleMouseOver()}
				onMouseOut={()=>this.handleMouseOut()}
				onClick ={()=>this.props.onClick(this.props.item)}
			style={this.style} 
			zDepth={this.state.depth}>{this.props.children}</Paper>
			:<Paper 
				zDepth={this.props.depth}
				style={this.props.style}
			>
				{this.props.children}
				</Paper>}
		</MuiThemeProvider>
	}
};

export default PaperMain;