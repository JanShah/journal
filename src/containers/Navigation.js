import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Dropdown from '../components/Dropdown'
import {addJournal,selectJournal} from '../actions';

class Navigation extends Component{

	addNewJournal(data){
		console.log(data,'adding new journal')
		
		this.props.addJournal({key:this.props.journals.length})
	}

	changeActive(value){
		this.props.selectJournal({journal:value})
	}

	journalTitles() {
		return <Dropdown 
			titles={this.props.journals} 
			changeActive={this.changeActive.bind(this)} 
			active={this.props.active} 
			add={this.addNewJournal.bind(this)} />
	}
	

	render() {
		return <div style={{float:'left',width:'100%' }}>
			{this.journalTitles()}
		</div>		
	}
}

function mapStateToProps(state) {
	const journalNames = state.journals.map(journal=>journal.name)
	return {	
		journals:journalNames,
		active:state.active.activeJournal
	}
}

function matchDispatchToProps (dispatch) {
	let boundActionCreators = bindActionCreators({		
		addJournal:addJournal,
		selectJournal:selectJournal
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation)
