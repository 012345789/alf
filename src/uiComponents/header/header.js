import React, { Component } from 'react';
import './header.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

let wideHeader = (
  <Tabs className="nav-tabs">
    <Tab className="nav-tab" label="About" href="#About"/>
    <Tab className="nav-tab" label="Tickets (On Sale Now)" href="#Tickets"/>
    <Tab className="nav-tab" label="Sponsors/Fundraising Goals" href="#Sponsors"/>
  </Tabs>
);

let titleStyle = {
  color: 'white',
  fontFamily: '"Quartan LT Std Bold", Georgia, Arial',
  fontSize: '20px',
};

let iconStyleLeft = {
  display: 'none'
};

let iconElement = (
  <div id="icon-menu">
    <IconMenu
      iconButtonElement={<IconButton><ContentFilter></ContentFilter></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      menuStyle={{backgroundColor: '#79AABA'}}
      menuItemStyle={{paddingTop: '0.7em'}}
    >
      <MenuItem href="#About" primaryText="About"></MenuItem>
      <MenuItem href="#Tickets" primaryText="Tickets - On Sale Now!"></MenuItem>
      <MenuItem href="#Sponsors" primaryText="Sponsors and Fundraising Goals"></MenuItem>
    </IconMenu>
  </div>
);

let smallHeader = (
  <AppBar
    title="Autumn Lights Festival"
    titleStyle={titleStyle}
    iconStyleLeft={iconStyleLeft}
    iconElementRight={iconElement}
  >
  </AppBar>
);

class Header extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.updateHeader = this.updateHeader.bind(this);
    this.state = {header: wideHeader};
  }

  updateHeader() {
    if (window.innerWidth < 725) {
      this.setState({ header: smallHeader });
    } else {
      this.setState({ header: wideHeader });
    }
  }

  componentDidMount() {
    this.updateHeader();
    window.addEventListener("resize", this.updateHeader.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeader.bind(this));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="header">
          {this.state.header}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;
