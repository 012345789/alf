import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import './modals.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg1 from '../../img/ALF-14-29.jpg';


class Card1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleModal('card1');
  }

  render() {

    let overlay = (
      <CardTitle title="What is it?" subtitle="Imagine yourself immersed in acres of lush gardens illuminated with mesmerizing art and lighting installations created by Bay Area artists.">
      </CardTitle>
    );

    let modalStyles = {
      width: '90%',
      maxWidth: 'none',
      textAlign: 'center',
    };


    let modal = (
      <div className="modal">
        <Dialog
          title="The Autumn Lights Festival is..."
          open={this.props.state.modal === 'card1'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
        >
          <img className="modal-pic" src={ cardImg1 } alt="Artist Crafted Mushroom Lights"/>
          {
              // <img className="modal-pic" src={ modalImg2 } alt="Participants Standing In Awe"/>
  }
          <p>
            The festive evenings blend live music, art, fire dancers, food and libations to make one unforgettable experience. This wildly popular annual tradition benefiting the Gardens at Lake Merritt is easy to get to and fun for all ages. Tickets are expected to sell out so be sure to check back on September 1 for more details!
          </p>

          <p>
            The Autumn Lights Festival, which has become a unique Oakland tradition, expands this year to a festive four-night community event held in the seven-acre oasis of themed gardens nestled in Lakeside Park surrounding Lake Merritt.
          </p>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <Card className="card" onClick={this.handleClick}>
            <CardMedia className="card-media" overlay={ overlay }>
              <img src={ cardImg1 } alt="Artist Crafted Mushroom Lights"/>
            </CardMedia>
            { modal }
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Card1;


