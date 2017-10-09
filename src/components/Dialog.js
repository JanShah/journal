import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Textbox from './Textbox'
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ContentCreate from 'material-ui/svg-icons/content/create';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import BottomBar from './BottomBar'

const customContentStyle = {
	width: '100%',
};

const fbStyle={
	marginRight:10
}
export default class DialogSimple extends Component {

	constructor(props) {
		super(props)
		console.log('mounting Dialog:',props)
		this.state= {
			open: false,
			bottomBar:false,
			error:'add a new '+this.props.type,
			data:props.data
		}
	}

	
  handleOpen = () => {
		this.setState({open: true});
		setTimeout(()=>{
			document.querySelector('#name_'+this.props.type).focus()
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
		const name=document.querySelector('#name_'+this.props.type).value
		const notes=document.querySelector('#notes_'+this.props.type).value
		if(name.length&&notes.length){
			this.props.complete({name:name,notes:notes})
			this.setState({open: false,bottomBar: false});			
		} else {
			this.errorMessage([name,notes])
		}
	}
	errorMessage(data){
		const err = !data[0].length?'Add a Title for the '+this.props.type:'Add a description for the '+this.props.type
		this.setState({
			error: err,
			bottomBar:true
		})
		setTimeout(()=>{
			!data[0].length?document.querySelector('#name_'+this.props.type).focus()
			:document.querySelector('#notes_'+this.props.type).focus()
		},50)
	}

	handleTextChange(event,value) {
		event.preventDefault()
		const bit = event.target.id.split('_')[0]		
	}

	textBox(name,data){
		return <div>
			<Textbox 
				label={this.props.type+' '+name} 
				required={true} 
				autoFocus 
				id={name+'_'+this.props.type} 
				value={data}/>
		</div>
	}


  render() {
		console.log('dialog props: ',this)
		const dataName = this.props.data.name
		const dataNotes = this.props.data.notes
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

		const dAction = this.props.action
    return (
			<MuiThemeProvider>
      <div>
        <FloatingActionButton  
				mini={true} 
				secondary={dAction==='add'} 
				onClick={this.handleOpen} 
				style={fbStyle}>
					{dAction==='add'?<ContentAdd />:<ContentCreate />}
				</FloatingActionButton>
        <Dialog
					autoScrollBodyContent={true}
					contentStyle={customContentStyle}
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
				{this.textBox('name',dataName)}
				{this.textBox('notes',dataNotes)}
				{this.state.bottomBar?<BottomBar open={this.state.bottomBar} message={this.state.error} />:null}
        </Dialog>
      </div>
			</MuiThemeProvider>
    );
  }
}