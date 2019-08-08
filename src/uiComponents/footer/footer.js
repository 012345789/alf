import React, { Component } from 'react';
import './footer.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Dialog } from 'material-ui';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked info')
    this.props.toggleModal('info');
  }

  render() {
    let modalStyles = {
      width: '90%',
      maxWidth: 'none',
      textAlign: 'center',
    };

    let infoModal = (
      <div className="modal">
        <Dialog
          title="Site Info"
          open={this.props.state.modal === 'info'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <p>
            Photo credits to Holly Healy and Emily Tinkey.
          </p>
          <p>
            Credits for the conceptual design of the improved Lake Merritt Gardens goes to Emily Geagan.
          </p>
          <p>
            This website was created and is maintained by Gorlan Yuen
          </p>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="footer" className="footer-text row">
          <div id="info-section" className="col-4" onClick={this.handleClick}>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            {infoModal}
          </div>
          <div className="col-4">
            © {(new Date().getFullYear())} Autumn Lights Festival
          </div>
          <div id="social-media-icons" className="col-4">
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/gardensatlakemerritt/">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/oaklandalf?lang=en">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/user/Gardenslakemerritt">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/gardens_lake_merritt/">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Footer;
