import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/Emily.Tinkey.tinks510.19.jpg';


class Card1 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateSubtext = this.updateSubtext.bind(this);
    this.state = {subtext: '', title: ''};
  }

  handleClick() {
    this.props.toggleModal('card1');
  }

  updateSubtext() {
    let title = "What is it?";
    if(window.innerWidth < 550) {
      this.setState({ subtext: title, title: '' });
    } else {
      let fullSubtext = "Imagine yourself immersed in acres of lush gardens illuminated with mesmerizing art and lighting installations created by Bay Area artists.";
      this.setState({ subtext: fullSubtext, title });
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
          title="The Autumn Lights Festival is..."
          open={this.props.state.modal === 'card1'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <img className="modal-pic" src={ cardImg } alt="Artist Crafted Mushroom Lights"/>
          <p>
            The festive evenings blend live music, illuminated art, fire dancers, food and libations to make one unforgettable experience. This wildly popular annual tradition benefiting the Gardens at Lake Merritt is easy to get to and fun for all ages.
          </p>

          <p>
            The Autumn Lights Festival, which has become a unique Oakland tradition, expands this year to a festive four-night community event held in the seven-acre oasis of themed gardens nestled in Lakeside Park surrounding Lake Merritt.
          </p>

          <p>
            This festive three-night event is for all ages. It entails a leisurely stroll along paved pathways through seven- acres of lush gardens. The pathways are minimally lit so as not to impede the art, so if you feel you may need a little extra light, feel free to bring a small flashlight. The festival is wheelchair accessible, ADA compliant.
          </p>

          <p>
            Persons will special needs may contact festival organizers in advance for assistance during the festival. Send an email to samee@heartofthetownevents.org or call Heart of the Town Events at 510-550- 4804, ext. 1.
          </p>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="About" className="section">
          <Card className="card-element" onClick={this.handleClick}>
            <CardMedia className="card-media" overlay={ overlay }>
              <img src={ cardImg } alt="Artist Crafted Mushroom Lights"/>
            </CardMedia>
            { modal }
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Card1;


