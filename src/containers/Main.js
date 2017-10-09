import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Paper from '../components/Paper'
import {selectEntry} from '../actions';



class Main extends Component {
	showEntries() {
		const entries = this.props.entries
		const active = this.props.active
		if(entries.length&&!active) {
			return entries.map((entry,index)=>{
				return (
				<Paper 
					onClick={this.editEntry.bind(this)} 
					item={entry.key} 
					key={index}>
					<h3>
						{entry.name}
					</h3>
					<p>{entry.notes}</p>
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
