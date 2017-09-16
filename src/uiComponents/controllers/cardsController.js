import React, { Component } from 'react';
import '../cards/cards.css';
import '../cards/modals.css';
import '../cards/ticketsCard.css';
import WhatCard from '../cards/whatCard.js';
import WhereWhenCard from '../cards/whereWhenCard.js';
import TicketsCard from '../cards/ticketsCard.js';
import FaqCard from '../cards/faqCard.js';
import TransportationCard from '../cards/transportationCard.js';

class CardsController extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card">
          <WhatCard toggleModal={this.props.toggleModal} state={this.props.state}>
          </WhatCard>
        </div>
        <div className="card">
          <WhereWhenCard toggleModal={this.props.toggleModal} state={this.props.state}>
          </WhereWhenCard>
        </div>
        <div id="Tickets" className="card vertical-cards section">
          <div className="vertical-card">
            <TicketsCard toggleModal={this.props.toggleModal} state={this.props.state}>
            </TicketsCard >
          </div>
          <div className="vertical-card">
            <FaqCard toggleModal={this.props.toggleModal} state={this.props.state}>
            </FaqCard >
          </div>
        </div>
        <div className="card">
          <TransportationCard toggleModal={this.props.toggleModal} state={this.props.state}>
          </TransportationCard >
        </div>
      </div>
    );
  }
}

export default CardsController;
