import React, { Component } from 'react';
import './sponsors.css';
import Sponsor from './sponsor.js';
import oaklandAsLogo from './logos/oakland-as-logo-small.png';
import nianticLogo from './logos/NIA_primary-vertical.png';

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
