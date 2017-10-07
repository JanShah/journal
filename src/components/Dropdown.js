import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from './Dialog'

export default class Tools extends React.Component {

  handleChange = (event, index, value) => {
		console.log(value)
		this.props.changeActive({value})
	};
	handleSmallChange = (event, value, index) => {
		console.log(value)
		this.props.changeActive({value})
	};

  render() {
		const titles = this.props.titles
		const active = this.props.active
		return (      
			<MuiThemeProvider>
				<Toolbar>
				<ToolbarGroup>
					<Dialog 
					add={this.props.add}
					title={'Add a Journal'}
					/>
					<FontIcon className="muidocs-icon-custom-sort" />
				</ToolbarGroup>
				<ToolbarGroup firstChild={true}>
					{window.innerWidth>600?<DropDownMenu value={active} onChange={this.handleChange} autoWidth={false}>
						{titles.map((title,index)=><MenuItem style={{float:'left'}} key={index} value={index} primaryText={title} />)}
					</DropDownMenu>:<IconMenu
						onChange={this.handleSmallChange}
						iconButtonElement={
							<IconButton touch={true}>
								<NavigationMenu />
							</IconButton>
						}>
						{titles.map((title,index)=><MenuItem key={index} value={index} primaryText={title} />)}
					</IconMenu>}
					
				</ToolbarGroup>
			</Toolbar>
			</MuiThemeProvider>
    );
  }
}