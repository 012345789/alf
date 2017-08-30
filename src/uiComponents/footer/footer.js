import React from 'react';
import './footer.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Footer = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div id="footer">
        <div className="footer-text">
          © {(new Date().getFullYear())} Autumn Lights Festival
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default Footer;
