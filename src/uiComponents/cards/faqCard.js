import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import './modals.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/ALF-14-2-crop.jpg';


class FaqCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateSubtext = this.updateSubtext.bind(this);
    this.state = {subtext: '', title: ''};
  }

  handleClick() {
    this.props.toggleModal('faq');
  }

  updateSubtext() {
    let fullTitle = "What should I know beforehand?";
    if(window.innerWidth < 750) {
      this.setState({ subtext: fullTitle, title: '' });
    } else {
      let fullSubtext = "The Autumn Lights Festival is an amazing spectactle that is great for family fun. Here's what you should know to get the most out of it.";
      this.setState({ subtext: fullSubtext, title: fullTitle });
    }
  }

  componentDidMount() {
    this.updateSubtext();
    window.addEventListener("resize", this.updateSubtext.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSubtext.bind(this));
  }

  render() {

    let overlay = (
        <CardTitle title={this.state.title} subtitle={this.state.subtext}>
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
          open={this.props.state.modal === 'faq'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <div className="modal-content-container">
            <div className="row">
              <div className="col-3">
                <img className="modal-vertical-pic" id="faq-picture" src={ cardImg } alt="Ball of Light on a Cliff"/>
              </div>
              <div className="col-9">
                <div className="faq-content">
                  <p className="faq-question">
                    Will there be Food &amp; Drink?
                  </p>
                  <p className="faq-answer">
                    Autumn Lights 2017 will feature a delectable array of locally-made food, beer and wine available for purchase. Last year, our food court was a huge hit and this year it will be expanded with an even broader range of culinary options. Locally-crafted beer, wine and soft drinks will also be available at two conveniently located stations.
                  </p>
                  <p className="faq-question">
                    What Should I Wear?
                  </p>
                  <p className="faq-answer">
                    Autumn Lights is an outdoor event in a public garden. Dress comfortably and in layers. Wear shoes appropriate for strolling/walking. Check weather listings for current forecasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="faq-content">
                  <p className="faq-question">
                    What Items are NOT Allowed Inside the Festival Grounds?
                  </p>
                  <p className="faq-answer">
                    For your safety the following items are NOT allowed:
                  </p>
                  <p className="faq-answer">
                      NO Cans or Glass Bottles
                  </p>
                  <p className="faq-answer">
                      NO Coolers or Ice Chests
                  </p>
                  <p className="faq-answer">
                      NO Alcoholic Beverages
                  </p>
                  <p className="faq-answer">
                    NO Animals with the Exception of Service Animals
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

export default FaqCard;


