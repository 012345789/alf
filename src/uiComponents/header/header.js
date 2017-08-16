import React, { Component } from 'react';
import './header.css';

// class Header extends Component {
//   render() {
//     return (
//       <div id="header">

//       </div>
//     );
//   }
// }

import {Tabs, Tab} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => {
  return (
    <div>
      <Tabs className="nav-tabs">
        <Tab className="nav-tab" label="About"/>
        <Tab className="nav-tab" label="Contact"/>
      </Tabs>
    </div>
  );
}

export default AppBarExampleIcon;

// export default Header;
