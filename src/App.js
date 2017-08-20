import React, { Component } from 'react';
import './App.css';

import Header from './uiComponents/header/header.js';
import AlfIntro from './uiComponents/alfIntro/alfIntro.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card1 from './uiComponents/cards/card1.js';
import './uiComponents/cards/cards.css';


class App extends Component {

  componentWillMount() {
    this.state = {modal: null};
  }

  render() {
    return (
      <div className="App">

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Header/>
        </MuiThemeProvider>

        <AlfIntro>
        </AlfIntro>

        <div id="sections">
          <div className="section">
            <div className="card">
              <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card1>
                </Card1>
              </MuiThemeProvider>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
