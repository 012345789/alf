import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, Dialog} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import cardImg from '../../img/ALF-14-20.jpg';


class TransportationCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateSubtext = this.updateSubtext.bind(this);
    this.state = {subtext: '', title: ''};
  }

  handleClick() {
    this.props.toggleModal('transportation');
  }

  updateSubtext() {
    let title = "Transportation Options";
    if(window.innerWidth < 550) {
      this.setState({ subtext: title, title: '' });
    } else {
      let fullSubtext = "Whether you plan to drive, bus, or ride-share, here's what you can do.";
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
          title="Transportation"
          open={this.props.state.modal === 'transportation'}
          onRequestClose={this.handleClick}
          contentStyle={modalStyles}
          autoScrollBodyContent={true}
        >
          <div className="modal-content-container">
            <div className="row">
              <div className="col-12">
                <p>
                  Autumn Lights is nestled in the gardens of Lakeside Park which surrounds Lake Merritt. The park entrance is on Bellevue Avenue, off Grand Avenue, just below Harrison Street. The street address is 666 Bellevue Avenue, Oakland, CA 94612.
                </p>
                <img className="modal-pic" src={ cardImg } alt="Lights in a Tree and Bright Wooden Structure"/>
                <p>
                  Here is a summary of the best options for getting to and from the festival:
                </p>
                <p>
                  <strong>Public Transportation</strong> – Festival-goers are urged to take AC Transit or BART to the 19th Street Station. Transit
                  info: 511.org
                </p>
                <p>
                  <strong>Parking </strong>– There is some parking along Bellevue Avenue inside Lakeside Park. The parking fee is $10.00 per vehicle. Parking inside the park is extremely limited – best options are public transit, taxi or ride share.
                </p>
                <p>
                  <strong>Tour Buses</strong> – Autumn Lights is an ideal event for tour groups. Buses are allowed to pull up very close to the main festival entrance for loading/unloading and can park along the roadway nearby while guests are enjoying the festival. To arrange a group visit, please contact Samee Roberts, President, Heart of the Town Events, samee@heartofthetownevents.org or call 510-550- 4804, ext.1.
                </p>
                <p>
        <strong>  Uber/Lyft/Taxi </strong>– The festival has designated a special drop off/pick up zone at the main park entrance on Grand @ Bellevue. From there, it is a short jaunt - about 800 feet - to the festival entrance. For those who need or prefer a lift, a driver/golf cart will be making a continuous loop to/from the drop off zone and the festival main entrance.
                </p>
                <p>
                  <strong>  Disabled Parking </strong>– there are designated blue handicapped parking spaces marked near the main festival entrance, in front of the Garden Center. Also, the festival-designated taxi/ride share drop off zone may be used for disabled guest pick/up drop off.
                </p>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className="card-element" onClick={this.handleClick}>
          <CardMedia className="card-media" overlay={ overlay }>
            <img src={ cardImg } alt="" className="vertical-card-image" />
          </CardMedia>
          { modal }
        </Card>
      </MuiThemeProvider>
    );
  }
}

export default TransportationCard ;


