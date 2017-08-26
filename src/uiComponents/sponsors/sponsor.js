import React, { Component } from 'react';

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="sponsor">
        <h4 className="sponsor-name">
          {this.props.name}
        </h4>
        <div className="sponsor-logo-container">
          <img className="sponsor-logo" src={this.props.img} />
          <br className="sponsor-logo-parent-extension" />
        </div>
      </div>
    );
  }
}

export default Sponsor;
