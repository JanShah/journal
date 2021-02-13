import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Paper from '../components/Paper'
import {selectEntry} from '../actions';



class Main extends Component {

	createMarkup(data) { 
		return {__html: data};
	}
	
	showEntries() {
		const innerStyle={  
			height: '150px',
			overflow: 'hidden',
			fontSize: '12px',
			p:{margin:0}
		}
		const entries = this.props.entries
		const active = this.props.active
		if(entries.length&&!active) {
			return entries.map((entry,index)=>{
				return (
				<Paper 
					plain={true}
					style={{cursor:'pointer'}}
					onClick={this.editEntry.bind(this)} 
					item={entry.key} 
					key={index}>
					<p dangerouslySetInnerHTML={this.createMarkup(entry.name)}></p>
					<div style={innerStyle} dangerouslySetInnerHTML={this.createMarkup(entry.notes)}></div>
					<em>{entry.date}</em>
				</Paper>
				)
			})
		}
	}
	editEntry(edits){
		this.props.selectEntry({value:edits})
	}
	render() {
		return <div>{this.showEntries()}</div>
	}
}
function mapStateToProps(state) {
	const active = state.active.activeJournal
	const activeEntry = state.active.activeEntry
	const entries = state.entries.filter(entry=>entry.parent===active)
	const activeEntries = entries.filter(entry=>entry.key===activeEntry)[0]
	return {	
		entries:entries,
		active:activeEntries,
		journal:active
	}
}

function matchDispatchToProps (dispatch) {
	let boundActionCreators = bindActionCreators({		
		selectEntry:selectEntry,
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(Main)
