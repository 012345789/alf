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
        <h4 className="sponsor-name">
          {this.props.name}
        </h4>
        <div className="sponsor-logo-container">
          <img className="spon-logo" src={this.props.img} alt={this.props.name}/>
          <br className="sponsor-logo-parent-extension" />
        </div>
      </div>
    );
  }
}

export default Sponsor;
