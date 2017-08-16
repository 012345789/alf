import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui';
import cardImg1 from '../../img/ALF-14-29.jpg';
// import './cards.css';

const Card1 = () => {
  let overlay = (
    <CardTitle title="Overlay title" subtitle="Imagine yourself immersed in acres of lush gardens illuminated with mesmerizing, larger-than-life art and lighting installations created by Bay Area artists.">
    </CardTitle>
  );

  return (
    <Card className="card">
      <CardMedia overlay={ overlay }>
        <img src={ cardImg1 } alt=""/>
      </CardMedia>
    </Card>
  );
}

export default Card1;


