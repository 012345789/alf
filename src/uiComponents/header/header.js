import React from 'react';
import './header.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Tabs, Tab} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Header = () => {
  // TODO: needs deep linking
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div id="header">
        <Tabs className="nav-tabs">
          <Tab className="nav-tab" label="About"/>
          <Tab className="nav-tab" label="Tickets"/>
          <Tab className="nav-tab" label="Sponsors"/>
        </Tabs>
      </div>
    </MuiThemeProvider>
  );
}

export default Header;
