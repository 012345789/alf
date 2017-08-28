import React, { Component } from 'react';
import './libraries/css/simple-grid.css';
import './App.css';

import Header from './uiComponents/header/header.js';
import AlfIntro from './uiComponents/alfIntro/alfIntro.js';
import CardsController from './uiComponents/controllers/cardsController.js';
import Sponsors from './uiComponents/sponsors/sponsors.js';
// import Tickets from './uiComponents/tickets/tickets.js';
import Footer from './uiComponents/footer/footer.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header/>

        <AlfIntro/>

        <div id="sections">

          <CardsController/>

          <Sponsors/>

        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
