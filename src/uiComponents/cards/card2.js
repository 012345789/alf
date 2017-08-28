import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg2 from '../../img/ALF-14-7.jpg';


class Card2 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleModal('card2');
  }

  render() {

    let overlay = (
        <CardTitle title="Where/When is it?" subtitle="Easily accessible in the heart of Oakland's pride, Lake Merritt, which is bustling with wildlife and fosters a culture-focused community.">
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
          title="Autumn Lights Festival is happening in..."
          open={this.props.state.modal === 'card2'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <img className="modal-pic" src={ cardImg2 } alt="Autumn Lights Medley"/>
          <p>
            The festival takes place at the Gardens of Lake Merritt every year.
          </p>
          <p>
            Join us for the festivities at 666 Bellevue Ave. Oakland, 94610!
          </p>
          <p>
            This year's festival will take place from October 19th through October 21st, every night from 6 pm until 11 pm.
          </p>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className="card" onClick={this.handleClick}>
          <CardMedia className="card-media" overlay={ overlay }>
            <img src={ cardImg2 } alt=""/>
          </CardMedia>
          { modal }
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default Card2;


