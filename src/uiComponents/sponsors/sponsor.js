import React, { Component } from 'react';

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="">
        <h4>
          {this.props.name}
        </h4>
        <img className="sponsor-logo" src={this.props.img} />
      </div>
    );
  }
}

export default Sponsor;
