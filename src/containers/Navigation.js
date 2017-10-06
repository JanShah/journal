import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Dropdown from '../components/Dropdown'
import {addJournal} from '../actions';
import {createIcon} from '../icons';

class Navigation extends Component{

	addNewJournal(){
		this.props.addJournal({key:this.props.journals.length})
	}

	viewJournalEntries(event){
		console.log('view entries: ',event)
	}

	journalTitles() {
		// console.log('getting journals')
		return <Dropdown titles={this.props.journals} add={this.addNewJournal.bind(this)} />
	}

	render() {
		return <div style={{float:'left',width:'100%'}}>
			{this.journalTitles()}	
		</div>		
	}
}

function mapStateToProps(state) {
	const journalNames = state.journals.map(journal=>journal.name)
	return {	
		journals:journalNames
	}
}

function matchDispatchToProps (dispatch) {
	let boundActionCreators = bindActionCreators({		
		addJournal:addJournal
}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation)
