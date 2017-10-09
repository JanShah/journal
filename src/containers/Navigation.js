import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar'
import Dialog from '../components/Dialog'
import Textbox from '../components/Textbox'
import {addJournal, editJournal, selectJournal} from '../actions';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

class Navigation extends Component{

	addNewJournal(data){
		console.log('journal adder in nav: ',data)
		this.props.addJournal({key:this.props.journals.length+1,data:data})
		setTimeout(()=>{
			this.changeActive({value:this.props.journals.length})
		},500)
	}

	changeActive(value){
		this.props.selectJournal({journal:value})
	}

  handleChange = (event, index, value) => {
		this.changeActive({value})
	};
	handleSmallChange = (event, value, index) => {
		this.changeActive({value})
	};

	menuItem(titles) {
		return titles.map((title,index)=><MenuItem key={index+1} value={index+1} primaryText={title} />)		
	}

	editActiveJournal(data) {
		// console.log('Data: ',data,'Active Journal: ',this.props.activeJournal,'Active Journal Key: ',this.props.active)
	}

	editDialog(data){ 
		this.Journal = data

		console.log('Active Journal in Navigation: ',this.Journal)
		return <Dialog 
			complete={this.editActiveJournal.bind(this)}
			title={'Edit a Journal'}
			type={'Journal'}
			data={this.Journal}
			action='edit'
		/>

	}

	journals() {
		const active = this.props.active
		const titles = this.props.journals
		console.log('getting navbar: ',this)
		return (
		<Navbar>
			<ToolbarGroup>
			<Dialog 
				complete={this.addNewJournal.bind(this)}
				title={'Add a Journal'}
				type={'Journal'}
				data={''}
				action='add'
				/>
			{this.editDialog(this.props.activeJournal)}
		</ToolbarGroup>
		<ToolbarGroup firstChild={true}>
			{window.innerWidth>600
			?<DropDownMenu value={active} onChange={this.handleChange} autoWidth={true}>
				{this.menuItem(titles)}
			</DropDownMenu>
			:<IconMenu
				onChange={this.handleSmallChange}
				iconButtonElement={
					<IconButton touch={true}>
						<NavigationMenu />
					</IconButton>
				}>
				{this.menuItem(titles)}
			</IconMenu>}
			
		</ToolbarGroup>
	</Navbar>
	)}
	

	render() {
		return <div style={{float:'left',width:'100%' }}>
			{this.journals()}
		</div>		
	}
}

function mapStateToProps(state) {
	const journalNames = state.journals.map(journal=>journal.name)
	const active = state.active.activeJournal
	const activeJournal = state.journals.filter(journal=>journal.key===active)[0]
	return {	
		journals:journalNames,
		active:active,
		activeJournal:activeJournal
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
