import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Textbox from './Textbox'
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import BottomBar from './BottomBar'

const customContentStyle = {
	width: '100%',
  maxWidth: 'none',
};

const fbStyle={
	marginRight:10
}
export default class DialogSimple extends React.Component {

	constructor(props) {
		super(props)
		this.state= {
			open: false,
			bottomBar:false,
			error:'add a new '+this.props.type
			
		}
	}
	
  handleOpen = () => {
		this.setState({open: true});
		setTimeout(()=>{
			document.querySelector('#Name_'+this.props.type).focus()
		},10)
	};

  handleClose = (event) => {
		this.setState({open: false, bottomBar:false});
  };
  handleCancel = () => {
		this.setState({open: false, bottomBar:false});
	}

	handleEnd=(event)=>{
		event.preventDefault()
		console.log('adding dialog:: ')
		const name=document.querySelector('#Name_'+this.props.type).value
		const notes=document.querySelector('#Notes_'+this.props.type).value
		if(name.length&&notes.length){
			this.props.add({name:name,notes:notes})
			this.setState({open: false,bottomBar: false});			
		} else {
			this.errorMessage([name,notes])
			// this.setState({bottomBar: true});			
		}
	}
	errorMessage(data){
		this.setState({
			error:!data[0].length?'Add a Title for the '+this.props.type:'Add a description for the '+this.props.type,
			bottomBar:true
		})
	}
  render() {
    const actions = [
		<FloatingActionButton
			label="Submit"
			style={fbStyle}   
			keyboardFocused={true}
			onClick={this.handleEnd}>
			<ActionThumbUp />
		</FloatingActionButton>,
    <FloatingActionButton  
			label="Cancel"
			mini={true}   
      secondary={true}
      onClick={this.handleCancel}>
			<NavigationCancel/>
		</FloatingActionButton>,
		];
		const textBoxes = <div><Textbox label={this.props.type+' Title'} required={true} autoFocus id={'Name_'+this.props.type}/>
		<Textbox label={this.props.type+' Notes'} id={'Notes_'+this.props.type}/></div>
    return (
			<MuiThemeProvider>
      <div>
        <FloatingActionButton  mini={true} secondary={true} onClick={this.handleOpen} >
					<ContentAdd />
				</FloatingActionButton>
        <Dialog
					contentStyle={customContentStyle}
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
				{textBoxes}
				{this.state.bottomBar?<BottomBar open={this.state.bottomBar} message={this.state.error} />:null}
        </Dialog>
      </div>
			</MuiThemeProvider>
    );
  }
}