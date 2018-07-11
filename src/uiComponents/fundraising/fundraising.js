import React, { Component } from 'react';
import './fundraising.css';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/fundraising-goals.jpg';

class Fundraising extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateSubtext = this.updateSubtext.bind(this);
    this.state = {subtext: '', title: ''};
  }

  handleClick() {
    this.props.toggleModal('fundraising');
  }

  updateSubtext() {
    let title = "Fundraising Goals";
    if(window.innerWidth < 750) {
      this.setState({ subtext: title, title: '' });
    } else {
      let fullSubtext = "The annual Autumn Lights Festival aims to raise money to improve the Gardens of Lake Merritt and power it with sustainable alternative energy.";
      this.setState({ subtext: fullSubtext, title });
    }
  }

  componentDidMount() {
    this.updateSubtext();
    window.addEventListener("resize", this.updateSubtext.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSubtext.bind(this));
  }

  render() {

    let overlay = (
      <CardTitle title={this.state.title} subtitle={this.state.subtext}>
      </CardTitle>
    );

    let modalStyles = {
      width: '90%',
      maxWidth: 'none',
      textAlign: 'center',
    };


    let modal = (
      <div className="modal">
        <Dialog
          title="Fundraising Goals for 2018"
          open={this.props.state.modal === 'fundraising'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <img className="modal-wide-pic" src={ cardImg } alt="Fundraising Plan Blueprint"/>
          <p>
            Held over three evenings in the night-darkened Gardens at Lake Merritt in Lakeside Park, Autumn Lights Festival is a fundraiser, with an old-school sense of purpose. Over five years’ of festivals, we reached a $200,000 goal.
          </p>
          <p>
        These funds will finance a new Garden Entry Welcome Plaza in 2018, with lush plantings, energy-efficient lighting, durable and secure fencing, hardscaped sidewalks and containers, drought-tolerant irrigation. These will set off the Gardens’ grand new wrought-iron gates, designed by local artist <a target="_blank" rel="noopener noreferrer" href="http://www.slmetalworks.com/">Shawn Lovell</a> and financed by Oakland’s Measure DD.
          </p>
          <p>
            The tradition now enters its sixth year, with a new fundraising target of $400,000 for a second phase.
          </p>
          <p>
            This includes a second gated entry, sufficient fencing to encompass the seven acres, improvements for the Garden Center building, and a permanent educational exhibit teaching the life cycle of butterflies. Our relatively invisible gardens will become an Oakland landmark.
          </p>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div id="Fundraising" className="section fundraising">
          <Card className="card-element" onClick={this.handleClick}>
            <CardMedia className="card-media" overlay={ overlay }>
              <img src={ cardImg } alt="Artist Crafted Mushroom Lights"/>
            </CardMedia>
            { modal }
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Fundraising ;
