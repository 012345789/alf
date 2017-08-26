import React, { Component } from 'react';
import './sponsors.css';
import Sponsor from './sponsor.js';
import oaklandAsLogo from './logos/oakland-as-logo-small.png';
import nianticLogo from './logos/NIA_primary-vertical.png'; // find a smaller resolution
import cityOfOaklandLogo from './logos/city-of-oakland-logo.gif';
import friendsLogo from './logos/friends-of-gardens-of-lake-merritt-logo.jpg';
import eastBayExpressLogo from './logos/EBX.png';
import oaklandMagazineLogo from './logos/oakland-magazine-logo.jpg';

class Sponsors extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section sponsors">
        <h2>
          Sponsors
        </h2>
        <div className="sponsors-row">
          <Sponsor name="Oakland A's" img={oaklandAsLogo} />
          <Sponsor name="Niantic Labs" img={nianticLogo} />
          <Sponsor name="City of Oakland" img={cityOfOaklandLogo} />
        </div>
        <div className="sponsors-row">
          <Sponsor name="East Bay Express" img={eastBayExpressLogo} />
          <Sponsor name="Oakland Magazine" img={oaklandMagazineLogo} />
          <Sponsor name="Oakland A's" img={oaklandAsLogo} />
        </div>
        <div className="sponsors-row">
          <Sponsor name="" img="" />
          <Sponsor name="Friends of the Gardens at Lake Merritt" img={friendsLogo} />
          <Sponsor name="" img="" />
        </div>
      </div>
    );
  }
}

export default Sponsors;

{
  // <div className="">
  //   <h4>
  //     Oakland A's
  //   </h4>
  //   <img src={oaklandAs} />
  // </div>
}
