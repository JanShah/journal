import React, {Component} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import '../css/editEntry.css'
export default class  extends Component {
  constructor(props) {
		super(props)
    this.state = { notes: props.content.notes,name: props.content.name } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleChange(value) {
		console.log(value)
    this.setState({ notes: value })
  }

  handleTitleChange(value) {
		console.log(value)
    this.setState({ name: value })
  }

  render() {
		const toolbarOptions = window.innerWidth>600?{
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
				[{ 'align': [] }],
				['clean']
			]
				
		}

		return (<div><ReactQuill theme='bubble'
			value={this.state.name}
			onChange={this.handleTitleChange} />
			
			<ReactQuill theme='snow'
			value={this.state.notes}
			modules={toolbarOptions} 
			onChange={this.handleChange} />
		</div>
      
    )
  }
}