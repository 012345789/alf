import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import '../cards/cards.css';
import Card1 from '../cards/card1.js';
import Card2 from '../cards/card2.js';

class CardsController extends Component {
  constructor(props) {
    super(props);
    this.state = {modal: ''};
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modal) {
    modal = this.state.modal === '' ? modal : '';
    this.setState({modal});
  }

  render() {
    return (
      <div className="section">
        <div className="card">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Card1 toggleModal={this.toggleModal} state={this.state}>
            </Card1>
          </MuiThemeProvider>
        </div>
        <div className="card">
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Card2 toggleModal={this.toggleModal} state={this.state}>
            </Card2>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default CardsController;
