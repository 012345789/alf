import React, { Component } from 'react';
import '../cards/cards.css';
import '../cards/modals.css';
import '../cards/card3.css';
import Card1 from '../cards/card1.js';
import Card2 from '../cards/card2.js';
import Card3 from '../cards/card3.js';
import Card4 from '../cards/card4.js';
import Card5 from '../cards/card5.js';

class CardsController extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card">
          <Card1 toggleModal={this.props.toggleModal} state={this.props.state}>
          </Card1>
        </div>
        <div className="card">
          <Card2 toggleModal={this.props.toggleModal} state={this.props.state}>
          </Card2>
        </div>
        <div id="Tickets" className="card vertical-cards section">
          <div className="vertical-card">
            <Card3 toggleModal={this.props.toggleModal} state={this.props.state}>
            </Card3>
          </div>
          <div className="vertical-card">
            <Card4 toggleModal={this.props.toggleModal} state={this.props.state}>
            </Card4>
          </div>
        </div>
        <div className="card">
          <Card5 toggleModal={this.props.toggleModal} state={this.props.state}>
          </Card5>
        </div>
      </div>
    );
  }
}

export default CardsController;
