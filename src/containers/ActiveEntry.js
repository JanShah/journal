import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectEntry} from '../actions';
import FloatingButton from '../components/FloatingButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import EditorEdit from 'material-ui/svg-icons/editor/mode-edit';
import EditEntry from './EditEntry'
import highlight from 'highlight.js'
class ActiveEntry extends Component {

	state={
		showing:false,
		editing:false
	}

	showActions() {
		const vis = !this.state.showing?'hidden':'visible'

		const style = {
			transition: 'display 0.5s',
			visibility:vis,
			marginTop:-30,
			position:'absolute'
		}
			return <div style={style}>
				<FloatingButton 
				label={<EditorEdit color={'blue'} hoverColor={'red'}/>} 
				onClick={this.startEditor.bind(this)}
				mini={false}
				style={{marginRight:10,marginLeft:20,}}
				/>
				<FloatingButton 
				label={<NavigationBack hoverColor={'red'}/>} 
				onClick={this.returnToMain.bind(this)}
				mini={true}
				secondary={true}
				/>
			</div>
	}


	showEntries() {
		const entry = this.props.entry
		// console.log('should be blank unless active entry: ',entry)
		if(entry)
		return <div 
		style={{textAlign:'left',marginLeft:20,marginTop:10}}
		onMouseOver={()=>this.setState({showing:true})}
		onMouseLeave={()=>this.setState({showing:false})}
		> {this.showActions()}
			<h1>{entry.name}</h1>
			<h3>{entry.notes}</h3>
		</div>
	}
	returnToMain() {
		this.setState({editing:false})
		this.props.selectEntry({value:-1})	
	}

	startEditor() {
		this.setState({editing:!this.state.editing})	
	}


	render() {
		const entryDetail = this.props.entry
		
		const entry = this.state.editing&&this.props.entry
		?<EditEntry 
		endEdit={this.startEditor.bind(this)} 
		content={entryDetail} />:this.showEntries()
		return <div>
			{entry}
		</div>
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
		selectEntry:selectEntry,
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(ActiveEntry)
