import React, { Component } from 'react';
import './App.css';

import Header from './uiComponents/header/header.js';
import AlfIntro from './uiComponents/alfIntro/alfIntro.js';
import CardsController from './uiComponents/controllers/cardsController.js';
import Sponsors from './uiComponents/sponsors/sponsors.js';
import Tickets from './uiComponents/tickets/tickets.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header/>

        <AlfIntro/>

        <div id="sections">

          <CardsController/>

          <Tickets/>

          <Sponsors/>

        </div>

      </div>
    );
  }
}

export default App;
