import React from 'react';
import './footer.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';

const Footer = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div id="footer" className="row">
        <div className="col-2">
          <FontIcon className="material-icons">info</FontIcon>
        </div>
        <div className="footer-text col-8">
          © {(new Date().getFullYear())} Autumn Lights Festival
        </div>
        <div className="col-2">
          
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default Footer;
