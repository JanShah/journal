import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 'calc(100% - 20px)',
  width: 'calc(50% - 20px)',
  marginTop: 5,
	marginBottom: 5,
	marginLeft:5,
	padding:'5px 0 20px 20px',
  textAlign: 'left',
  display: 'inline-block',
};

class PaperMain extends Component {

	constructor() {
		super()
		this.state={
			depth:0
		}
	}

	handleMouseOver(){
		console.log('mouse over')
		this.setState({
			depth:4
		})
	}
	handleMouseOut(){
		this.setState({
			depth:0
		})
	}
	render() {
		return <MuiThemeProvider>
			<Paper 
				onMouseOver={()=>this.handleMouseOver()}
				onMouseOut={()=>this.handleMouseOut()}
			style={style} 
			zDepth={this.state.depth}>{this.props.children}</Paper>
		</MuiThemeProvider>
	}
};

export default PaperMain;