import React, { Component } from 'react';
import '../cards/cards.css';
import '../cards/modals.css';
import '../cards/card3.css';
import Card1 from '../cards/card1.js';
import Card2 from '../cards/card2.js';
import Card3 from '../cards/card3.js';
import Card4 from '../cards/card4.js';

class CardsController extends Component {
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
      <div className="section">
        <div className="card">
          <Card1 toggleModal={this.toggleModal} state={this.state}>
          </Card1>
        </div>
        <div className="card">
          <Card2 toggleModal={this.toggleModal} state={this.state}>
          </Card2>
        </div>
        <div className="card vertical-cards">
          <div className="vertical-card">
            <Card3 toggleModal={this.toggleModal} state={this.state}>
            </Card3>
          </div>
          <div className="vertical-card">
            <Card4 toggleModal={this.toggleModal} state={this.state}>
            </Card4>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsController;
