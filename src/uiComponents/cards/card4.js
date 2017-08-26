import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import './modals.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/ALF-14-28.jpg';


class Card4 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleModal('card4');
  }

  render() {

    let overlay = (
        <CardTitle title="I'm stoked! How can I buy tickets?" subtitle="Last year's ticketing system was a huge success. We're proud to announce that guests can expect a great ticketing experience again this year.">
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
          open={this.props.state.modal === 'card4'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
        >
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
          <div className="modal-pic-container">
            <img className="modal-vertical-pic" src={ cardImg } alt="Ball of Light on a Cliff"/>
          </div>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className="card-element" onClick={this.handleClick}>
          <CardMedia className="card-media" overlay={ overlay }>
            <img src={ cardImg } alt="" className="vertical-card-image" />
          </CardMedia>
          { modal }
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default Card4;


