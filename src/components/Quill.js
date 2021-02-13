import React, {Component} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import '../css/editEntry.css'

export default class Quill extends Component {
	toolbarOptions() {
		return window.innerWidth>600?{
			syntax:true,
			toolbar:[
				[{ 'indent': '-1'}, { 'indent': '+1' }],
				[{ 'script': 'sub'}, { 'script': 'super' }],
				['bold', 'italic','underline','strike'], 
				[{ 'color': [] }, { 'background': [] }],
				[{ 'header': 1 }, { 'header': 2 }, { 'header': 3 }, { 'header': 4 }],
				[{ 'font': [] }],
				[{ 'align': [] }],
				['link', 'image'],
				['clean'],
				['code-block']
			],
				
		}:{
			toolbar:[
				[{ 'indent': '-1'}, { 'indent': '+1' }],
				['bold', 'italic'], 
				[{ 'color': [] }],
				[{ 'header': [] }],
				[{ 'align': 'center'}],
				['clean']
			]
		}
	}
	componentWillUnmount() {
	}
	

	render(props) {
		return <ReactQuill theme={this.props.theme}
			value={this.props.value}
			modules={this.toolbarOptions()} 
			onChange = {this.props.onChange}
			style={this.props.style}
			readOnly={this.props.readOnly}
		/>
	}
}