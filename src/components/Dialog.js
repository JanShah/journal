import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Textbox from './Textbox'
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const customContentStyle = {
	width: '100%',
  maxWidth: 'none',
};

const fbStyle={
	marginRight:10
}
export default class DialogSimple extends React.Component {
  state = {
		open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = (event) => {
		this.setState({open: false});
		const title=document.querySelector('#jTitle').value
		const desc=document.querySelector('#jDesc').value
		this.props.add({title:title,desc:desc})
  };
  handleCancel = () => {
		this.setState({open: false});
	}
  render() {
    const actions = [
      <FloatingActionButton  
				mini={true}   
				style={fbStyle}   
        secondary={true}
        onClick={this.handleCancel}>
			<NavigationCancel/>
			</FloatingActionButton>,
      <FloatingActionButton
        label="Submit"
        
        keyboardFocused={true}
        onClick={this.handleClose}
      >
			<ActionThumbUp />
			</FloatingActionButton>,
		];
		
    return (
			<MuiThemeProvider>
      <div>
        <FloatingActionButton  mini={true} secondary={true} onClick={this.handleOpen} >
					<ContentAdd />
				</FloatingActionButton>
        <Dialog
					contentStyle={customContentStyle}
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <Textbox label={'Journal Title'} id={'jTitle'}/>
        <Textbox label={'Journal Introduction'} id={'jDesc'}/>
        </Dialog>

      </div>
			</MuiThemeProvider>
    );
  }
}