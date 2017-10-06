import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/menu';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Tools extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
		const titles = this.props.titles
		return (      
			<MuiThemeProvider>
				<Toolbar>
				<ToolbarGroup>
					<ToolbarTitle text="Options" />
					<FontIcon className="muidocs-icon-custom-sort" />
					<ToolbarSeparator />
					<RaisedButton label="Create Journal" primary={true} onClick={this.props.add}/>
				</ToolbarGroup>
				<ToolbarGroup firstChild={true}>
					<DropDownMenu value={this.state.value} onChange={this.handleChange}>
						{titles.map((title,index)=><MenuItem style={{float:'left'}} key={index} value={index} primaryText={title} />)}
					</DropDownMenu>
					<IconMenu
							iconButtonElement={
								<IconButton touch={true}>
									<NavigationExpandMoreIcon />
								</IconButton>
							}>
						<MenuItem primaryText="More Info" />
						</IconMenu>
				</ToolbarGroup>
			</Toolbar>
			</MuiThemeProvider>
    );
  }
}