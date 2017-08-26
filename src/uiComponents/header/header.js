import React from 'react';
import './header.css';

import {Tabs, Tab} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Header = () => {
  return (
    <div id="header">
      <Tabs className="nav-tabs">
        <Tab className="nav-tab" label="About"/>
        <Tab className="nav-tab" label="Tickets"/>
        <Tab className="nav-tab" label="Sponsors"/>
      </Tabs>
    </div>
  );
}

export default Header;
