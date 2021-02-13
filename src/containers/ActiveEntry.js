import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEntry } from '../actions';
import FloatingButton from '../components/FloatingButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import EditorEdit from 'material-ui/svg-icons/editor/mode-edit';
import EditEntry from './EditEntry';
import highlight from 'highlight.js';
import Paper from '../components/Paper';
import Tagger from '../components/Tagger';

class ActiveEntry extends Component {

	state = {
		showing: false,
		editing: false
	}


	componentWillUnmount() {
	}

	showActions() {
		const vis = !this.state.showing ? 'hidden' : 'visible'

		const style = {
			transition: 'display 0.5s',
			visibility: vis,
			marginTop: -30,
			position: 'absolute'
		}
		return <div style={style}>
			<FloatingButton
				label={<EditorEdit color={'blue'} hoverColor={'red'} />}
				onClick={this.startEditor.bind(this)}
				mini={false}
				style={{ marginRight: 10, marginLeft: 20, }}
			/>
			<FloatingButton
				label={<NavigationBack hoverColor={'red'} />}
				onClick={this.returnToMain.bind(this)}
				mini={true}
				secondary={true}
			/>
		</div>
	}

	createMarkup(data) { return { __html: data }; };

	showEntries() {
		const innerStyle = {
			lineHeight: 0,
			overflow: 'auto',
			fontSize: '12px',
			maxHeight: window.innerHeight - 200
		}
		const entry = this.props.entry
		// console.log('should be blank unless active entry: ',entry)
		if (entry)
			return <div
				style={{ textAlign: 'left', marginLeft: 20, marginTop: 10 }}
				onMouseOver={() => this.setState({ showing: true })}
				onMouseLeave={() => this.setState({ showing: false })}
			> {this.showActions()}
				<h1 dangerouslySetInnerHTML={this.createMarkup(entry.name)}></h1>
				<div style={innerStyle} dangerouslySetInnerHTML={this.createMarkup(entry.notes)}></div>
			</div>
	}
	returnToMain() {
		this.setState({ editing: false })
		this.props.handleEditing(false)
		this.props.selectEntry({ value: -1 })
	}

	startEditor() {
		this.props.handleEditing(!this.state.editing)
		this.setState({ editing: !this.state.editing })
	}


	render() {
		const entryDetail = this.props.entry

		const entry = <EditEntry
			endEdit={this.startEditor.bind(this)}
			content={entryDetail}
			readOnly={!this.state.editing}
			returnToMain={this.returnToMain.bind(this)}
		/>
		if (entryDetail) {
			return <>
			<Paper style={{ margin: 20 }} depth={this.state.editing?4:0}>
				{entry}
			</Paper>
				<div>
					<Tagger />
				</div>
			</>
		} else { return <div></div> }
	}
}

function mapStateToProps(state) {
	const active = state.active.activeEntry
	const entry = state.entries.filter(entry => entry.key === active)[0]
	return {
		entry: entry
	}
}

function matchDispatchToProps(dispatch) {
	let boundActionCreators = bindActionCreators({
		selectEntry: selectEntry,
	}, dispatch);
	return boundActionCreators;
}

export default connect(mapStateToProps, matchDispatchToProps)(ActiveEntry)
