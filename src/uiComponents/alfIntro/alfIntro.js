import React, { Component } from 'react';
import './intro.css';
import alfLogo from '../../img/ALF-14-35.jpg';

let bkgrd = {
  backgroundImage: `url(${alfLogo})`,
  width: '99%',
  height: '0',
  paddingTop: '36%',
  backgroundPosition: 'center top',
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat',
  margin: '0.3em 0.3em 0 0.3em',
}

class AlfIntro extends Component {
  render () {
    return (
      <div style={bkgrd}>
        <div id="title-container" >
          <div className="title-text">
            <div id="title-description">
              A fundraiser for the Gardens at Lake Merritt
            </div>
            <div id="title-count">
              6th Annual
            </div>
            <div className="title">
              Autumn
            </div>
            <div className="title" id="lights">
              LIGHTS
            </div>
            <div className="title">
              Festival
            </div>
            <div id="title-date">
              October 19 - 21, 2017
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlfIntro;
