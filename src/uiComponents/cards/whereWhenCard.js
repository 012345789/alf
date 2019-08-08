import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/ALF-14-7.jpg';


class WhereWhenCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateSubtext = this.updateSubtext.bind(this);
    this.state = {subtext: '', title: ''};
  }

  handleClick() {
    this.props.toggleModal('whereWhen');
  }

  updateSubtext() {
    let title = "Where/When is it?";
    if(window.innerWidth < 550) {
      this.setState({ subtext: title, title: '' });
    } else {
      let fullSubtext = "Easily accessible in the heart of Oakland's pride, Lake Merritt, which is bustling with wildlife and fosters a culture-focused community.";
      this.setState({ title, subtext: fullSubtext });
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
          title="Autumn Lights Festival is happening in..."
          open={this.props.state.modal === 'whereWhen'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <img className="modal-pic" src={ cardImg } alt="Autumn Lights Medley"/>
          <p>
            The festival takes place at the Gardens of Lake Merritt every year.
          </p>
          <p>
            Join us for the festivities at 666 Bellevue Ave. Oakland, 94610!
          </p>
          <p>
            This year's festival will take place from October 17th through October 19th, every night from 6 pm until 11 pm.
          </p>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className="card-element" onClick={this.handleClick}>
          <CardMedia className="card-media" overlay={ overlay }>
            <img src={ cardImg } alt=""/>
          </CardMedia>
          { modal }
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default WhereWhenCard;


