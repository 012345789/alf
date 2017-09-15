import React, { Component } from 'react';

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // TODO: needs vertical centering
  render() {
    return (
      <div className="col-4 sponsor">
        <p className="sponsor-description">
          {this.props.description}
        </p>
        <h4 className="sponsor-name">
          {this.props.type}
        </h4>
        <div className="sponsor-logo-container">
          <img className="spon-logo" src={this.props.img} alt={this.props.type}/>
          <br className="sponsor-logo-parent-extension" />
        </div>
      </div>
    );
  }
}

export default Sponsor;
