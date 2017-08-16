import React, { Component } from 'react';
import './App.css';
// import {GridList, GridTile} from 'material-ui/GridList';
// import Header from './uiComponents/header/header.js';

import AppBarExampleIcon from './uiComponents/header/header.js';
import AlfIntro from './uiComponents/alfIntro/alfIntro.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Card1 from './uiComponents/cards/card1.js';
import './uiComponents/cards/cards.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        { /*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        */}
        { /*
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */ }
        <div className="App-header">
        </div>

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBarExampleIcon/>
        </MuiThemeProvider>

        { /*
        <Header>
        </Header>
          */}
        <AlfIntro>
        </AlfIntro>

        <div> {/* card 1: Imagine yourself immersed in acres of lush gardens illuminated with mesmerizing, larger-than-life art and lighting installations created by Bay Area artists.*/}
        </div>

        <div className="section">
          <div className="card">
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <Card1>
              </Card1>
            </MuiThemeProvider>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
