import React, { Component } from 'react';
import './sponsors.css';
import Sponsor from './sponsor.js';
import oaklandAsLogo from './logos/oakland-as-logo-small.png';
import nianticLogo from './logos/NIA_primary-vertical.png'; // find a smaller resolution
import cityOfOaklandLogo from './logos/city-of-oakland-logo.gif';
import friendsLogo from './logos/friends-of-gardens-of-lake-merritt-logo.jpg';
import eastBayExpressLogo from './logos/EBX.png';
import oaklandMagazineLogo from './logos/oakland-magazine-logo.jpg';
import heartOfTheTownLogo from './logos/heart-of-the-town-logo.png';
import allSponsors from './logos/allSponsors18.png';

class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="Sponsors" className="section sponsors">
        <h3 className="spon-header">
          Friends of the Gardens at Lake Merritt are grateful for the contributions of the following sponsors:
        </h3>
        <div className="sponsors-container container">
          <img id="contributions" src={allSponsors} alt="contributions"/>
        {
        /*
          <div className="row sponsors-row">
            <Sponsor description="Brought to you by" type="Spotlight Sponsor" img={nianticLogo} />
            <Sponsor type="Festival Sponsor" img={oaklandAsLogo} />
            <Sponsor type="Festival Sponsor" img={cityOfOaklandLogo} />
          </div>
        */
        }
          <h3>
            In Partnership With
          </h3>
          <div className="row sponsors-row">
            <Sponsor type="" img={oaklandMagazineLogo} />
            <Sponsor type="" img={friendsLogo} />
            <Sponsor type="" img={eastBayExpressLogo} />
          </div>
          <h3>
            And
          </h3>
          <div className="row sponsors-row">
            <div className="col-4"></div>
            <div className="col-4">
              <a href="https://www.heartofthetownevents.org/" target="_blank">
                <img className="spon-logo" src={heartOfTheTownLogo} alt="Heart of the Town Events" />
              </a>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
