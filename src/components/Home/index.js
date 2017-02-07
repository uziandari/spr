import React, { Component } from 'react'; 

import './style.css';

export default class App extends Component {

  render() {
    return (
      <div id="home-wrapper">
        <div className="name-title">
          SteveM.
        </div>
        <div className="sub-title">
          html/css/js
        </div>
        <div className="links">
          <a href="https://github.com/uziandari"><i className="fa fa-github-alt" aria-hidden="true"></i></a>
          <a href="https://twitter.com/SteveMessing"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="https://freecodecamp.com/uziandari"><i className="fa fa-free-code-camp" aria-hidden="true"></i></a>
          <a href="https://codepen.io/uziandari"><i className="fa fa-codepen" aria-hidden="true"></i></a>      
        </div>
      </div>
    );
  }

}