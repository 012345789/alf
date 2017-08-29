import React, { Component } from 'react';
import './header.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Tabs, Tab} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Header extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="header">
          <Tabs className="nav-tabs">
            <Tab className="nav-tab" label="About" href="#About"/>
            <Tab className="nav-tab" label="Tickets (On Sale Now)" href="#Tickets"/>
            <Tab className="nav-tab" label="Sponsors/Fundraising Goals" href="#Sponsors"/>
          </Tabs>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;
