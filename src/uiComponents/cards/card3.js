import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import './modals.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/ALF-14-2-crop.jpg';


class Card3 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleModal('card3');
  }

  render() {

    let overlay = (
        <CardTitle title="What should I know beforehand?" subtitle="The Autumn Lights Festival is an amazing spectactle that is great for family fun. Here's what you should know to get the most out of it.">
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
          title="Frequently Asked Questions"
          open={this.props.state.modal === 'card3'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
        >
          <div className="modal-pic-container">
            <img className="modal-vertical-pic" src={ cardImg } alt="Ball of Light on a Cliff"/>
          </div>
          <div className="modal-content-container">
            <p>
              Here's my question?
            </p>
            <p>
              Here's the answer.
            </p>
            <p>
              This year's festival will take place from October 19th through October 21st, every night from 6 pm until 11 pm.
            </p>
          </div>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className="card-element" onClick={this.handleClick}>
          <CardMedia className="card-media" overlay={ overlay }>
            <img src={ cardImg } alt="" className="vertical-card-image"/>
          </CardMedia>
          { modal }
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default Card3;


