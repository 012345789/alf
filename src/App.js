import React, { Component } from 'react';
import logo from './logo.svg';
import alfLogo from './img/ALF-35.jpg';
import './App.css';
import {GridList, GridTile} from 'material-ui/GridList';

let bkgrd = {
    backgroundImage: `url(${alfLogo})`,
    width: '99%', /* should dynamically resize based on browser width */
    height: '390px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    margin: '0.3em 0.3em 0 0.3em',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        { /*
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        */}
        { /*
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        */ }
        <div className="App-header">
        </div>
        <div style={bkgrd}>
            <div id="title-container" >
                <div className="title">
                    <span>
                        Autumn
                    </span>
                </div>
                <div className="title">
                    <span>
                        Lights
                    </span>
                </div>
                <div className="title">
                    <span>
                        Festival
                    </span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
