import React, { Component } from 'react';
import './App.css';

import Header from './uiComponents/header/header.js';
import AlfIntro from './uiComponents/alfIntro/alfIntro.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CardsController from './uiComponents/controllers/cardsController.js';


class App extends Component {

  render() {
    return (
      <div className="App">

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Header/>
        </MuiThemeProvider>

        <AlfIntro>
        </AlfIntro>

        <div id="sections">
          <CardsController/>

          <div className="section">
          </div>

        </div>

      </div>
    );
  }
}

export default App;
