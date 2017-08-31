import React, { Component } from 'react';
import './libraries/css/simple-grid.css';
import './App.css';
import './libraries/fonts/font-awesome-4.7.0/css/font-awesome.css';

import Header from './uiComponents/header/header.js';
import AlfIntro from './uiComponents/alfIntro/alfIntro.js';
import CardsController from './uiComponents/controllers/cardsController.js';
import Sponsors from './uiComponents/sponsors/sponsors.js';
import Fundraising from './uiComponents/fundraising/fundraising.js';
import Footer from './uiComponents/footer/footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {modal: ''};
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modal) {
    modal = this.state.modal === '' ? modal : '';
    this.setState({modal});
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <AlfIntro/>

        <div id="sections">

          <CardsController toggleModal={this.toggleModal} state={this.state} />

          <Sponsors/>

          <Fundraising toggleModal={this.toggleModal} state={this.state} />

        </div>

        <Footer toggleModal={this.toggleModal} state={this.state} />

      </div>
    );
  }
}

export default App;
