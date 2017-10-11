import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FloatingButton from '../components/FloatingButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import EditorEdit from 'material-ui/svg-icons/editor/mode-edit';
import Quill from '../components/Quill'
import {editEntryName,editEntryNotes} from '../actions'
class EditEntry extends Component {
  constructor(props) {
		super(props)
		console.log(this,props)
		this.state = { 
			notes: props.content.notes,
			name: props.content.name 
		}
		this.updateName = this.updateName.bind(this)
		this.updateNotes = this.updateNotes.bind(this)
    this.handleChange = this.handleChange.bind(this)
		this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleChange(value) {
		this.setState({ notes: value })
	}

	componentDidUpdate() {
		if(!this.int&&!this.props.readOnly)
		this.int = window.setTimeout(()=>{
			this.doChecking()			
		},3000)
	}
	doChecking() {
		if(this.props.content.notes!==this.state.notes) {
			this.updateNotes()
		}
		if(this.props.content.name!==this.state.name) {
			this.updateName()
		}
		if(this.props.readOnly) {
			window.clearTimeout(this.int)
		} 
		this.int = null
	}
	
  handleTitleChange(value) {
		this.setState({ name: value })
	}

	updateName() {
		this.props.editEntryName({name:this.state.name,key:this.props.entry.key})
	}

	updateNotes() {
		this.props.editEntryNotes({notes:this.state.notes,key:this.props.entry.key})
	}

  render() {

		return (<div>
			<div style={{height:34, display: 'flex'}}>
				{this.props.readOnly?<FloatingButton 
					label={<NavigationBack hoverColor={'red'}/>} 
					onClick={this.props.returnToMain.bind(this)}
					mini={true}
					secondary={true}
					noFloat={true}
					reading={this.props.readOnly}
				/>:''}
				<FloatingButton 
					label={!this.props.readOnly?<NavigationBack hoverColor={'red'}/>:<EditorEdit hoverColor={'red'}/>} 
					onClick={this.props.endEdit.bind(this)}
					mini={true}
					secondary={true}
					noFloat={true}
					reading={this.props.readOnly}
					/>
				
			</div>
			<Quill 
			theme={!this.props.readOnly?'bubble':'bubble'}
			value={this.state.name}
			onChange={this.handleTitleChange} 
			style={{marginBottom:20}}
			readOnly = {this.props.readOnly}
			/>
			
			<Quill theme={!this.props.readOnly?'snow':'bubble'}
			value={this.state.notes}
			onChange={this.handleChange}
			readOnly = {this.props.readOnly}
		 	/>
		</div>
      
    )
  }
}


function mapStateToProps(state) {
	const active = state.active.activeEntry
	const entry = state.entries.filter(entry=>entry.key===active)[0]
	return {	
		entry:entry
	}
}

function matchDispatchToProps (dispatch) {
	let boundActionCreators = bindActionCreators({
		editEntryName:editEntryName,
		editEntryNotes:editEntryNotes
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(EditEntry)
