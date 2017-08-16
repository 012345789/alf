import React, { Component } from 'react';
import alfLogo from '../../img/ALF-14-35.jpg';

let bkgrd = {
    backgroundImage: `url(${alfLogo})`,
    width: '99%', /* should dynamically resize based on browser width */
    height: '390px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    margin: '0.3em 0.3em 0 0.3em',
}

class AlfIntro extends Component {
    render () {
        return (
          <div style={bkgrd}>
            <div id="title-container" >
              <div className="title">
                <span>
                  Autumn
                </span>
              </div>
              <div className="title">
                <span>
                  Lights
                </span>
              </div>
              <div className="title">
                <span>
                  Festival
                </span>
              </div>
            </div>
          </div>
        );
    }
}

export default AlfIntro;
