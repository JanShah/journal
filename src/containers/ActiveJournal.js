import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class ActiveJournal extends Component {
	showEntries() {
		const journal = this.props.journal
		return <div>
			<h1>{journal.name}</h1>
			<h3>{journal.notes}</h3>
		</div>
	}

	render() {
		return <div>{this.showEntries()}</div>
	}
}

function mapStateToProps(state) {
	const active = state.active.activeJournal
	console.log('all: ',state)
	const journal = state.journals.filter(journal=>journal.key===active)[0]
	return {	
		journal:journal
	}
}

function matchDispatchToProps (dispatch) {
	let boundActionCreators = bindActionCreators({		
		// addJournal:addJournal,
		// selectJournal:selectJournal
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(ActiveJournal)
