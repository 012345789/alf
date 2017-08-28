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
          autoScrollBodyContent={true}
        >
          <div className="modal-content-container">
            <div className="row">
              <div className="col-3">
                <img className="modal-vertical-pic" src={ cardImg } alt="Ball of Light on a Cliff"/>
              </div>
              <div className="col-9">
                <div className="faq-content">
                  <p className="faq-question">
                    Will there be Food &amp; Drink?
                  </p>
                  <p className="faq-answer">
                    Autumn Lights 2017 will feature a delectable array of locally-made food, beer and wine available for purchase.
                  </p>
                  <p className="faq-question">
                    What Should I Wear?
                  </p>
                  <p className="faq-answer">
                    Autumn Lights is an outdoor event in a public garden. Dress comfortably and in layers. Wear shoes appropriate for strolling/walking. Check weather listings for current forecasts.
                  </p>
                  <p className="faq-question">
                    What’s the Best Way to Get to/from Autumn Lights?
                  </p>
                  <p className="faq-answer">
                    Autumn Lights is nestled in the gardens of Lakeside Park which surrounds Lake Merritt. The park entrance is on Bellevue Avenue, off Grand Avenue, just below Harrison Street. The street address is 666 Bellevue Avenue, Oakland, CA 94612.
                  </p>
                </div>
              </div>
            </div>
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


