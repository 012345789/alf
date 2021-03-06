import React, { Component } from 'react';
import './intro.css';
import alfLogo from '../../img/intro-image.jpg';

let bkgrd = {
  backgroundImage: `url(${alfLogo})`,
  width: '99%',
  height: '0',
  paddingTop: '66%',
  backgroundPosition: 'center top',
  backgroundSize: '100% auto',
  backgroundRepeat: 'no-repeat',
  margin: '0.3em 0.3em 0 0.3em',
}

class AlfIntro extends Component {
  constructor(props) {
    super(props);
    this.updateMargin = this.updateMargin.bind(this);
    this.state = {titleTextStyles: {marginLeft: '15%', marginTop: '0', width: '85%'}};
  }

  updateMargin() {
    if (window.innerWidth < 445) {
      this.setState({ titleTextStyles: {marginLeft: '15%', marginTop: '37%', width: '85%'} });
    } else if (window.innerWidth < 800) {
      this.setState({ titleTextStyles: {marginLeft: '26%', marginTop: '37%', width: '74%'} });
    } else {
      this.setState({ titleTextStyles: {marginLeft: '15%', marginTop: '0', width: '85%'} });
    }
  }

  componentDidMount() {
    this.updateMargin();
    window.addEventListener("resize", this.updateMargin.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateMargin.bind(this));
  }

  render () {
    return (
      <div style={bkgrd}>
        <div id="title-container" >
          <div className="title-text" style={this.state.titleTextStyles}>
            <div id="title-description">
              A fundraiser for the Gardens at Lake Merritt
            </div>
            <div id="title-count">
              8th Annual
            </div>
            <div className="title" id="autumn">
              Autumn
            </div>
            <div className="title" id="lights">
              LIGHTS
            </div>
            <div className="title" id="festival">
              Festival
            </div>
            <div id="title-date">
              October 17 - 19, 2019
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlfIntro;
