import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText, Dialog} from 'material-ui';
import cardImg1 from '../../img/ALF-14-29.jpg';
// import './cards.css';

// const Card1 = () => {
class Card1 extends Component {
  constructor() {
    super();
  }

  render() {

    let overlay = (
        <CardTitle title="Overlay title" subtitle="Imagine yourself immersed in acres of lush gardens illuminated with mesmerizing, larger-than-life art and lighting installations created by Bay Area artists.">
        </CardTitle>
    );
    // let isModalOpen = false;
    let toggleModal = () => {
      console.log('toggled')
      // isModalOpen = !isModalOpen;
      console.log(this.state);
    };

    return (
      <Card className="card" onClick={toggleModal}>
        <CardMedia className="card-media" overlay={ overlay }>
          <img src={ cardImg1 } alt=""/>
        </CardMedia>
        <Dialog
          title="Modal"
          open={this.state === 'card1'}
          onRequestClose={toggleModal}
        >
          Modal Content
        </Dialog>
      </Card>
    );
  }
}

export default Card1;


