import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Paper from '../components/Paper'



class Main extends Component {
	showEntries() {
		const entries = this.props.entries
		if(entries.length) {
			return entries.map((entry,index)=>{
				return <Paper key={index}><h3>{entry.name}</h3> <p>{entry.notes}</p> <em>{entry.date}</em> </Paper>
			})
		}
	}
	render() {
		return <div>{this.showEntries()}</div>
	}
}

function mapStateToProps(state) {
	const active = state.active.activeJournal
	const entries = state.entries.filter(entry=>entry.parent===active)
	console.log('main state: ',state,entries)
	return {	
		entries:entries
	}
}

function matchDispatchToProps (dispatch) {
	let boundActionCreators = bindActionCreators({		
		// addJournal:addJournal,
		// selectJournal:selectJournal
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(Main)
