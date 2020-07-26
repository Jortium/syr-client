import React, { Component } from 'react';
import './TopNav.css';

export default class TopNav extends Component {
  render(){
    return (
        <nav className="navBar">
        <h1 className="navBrandM"><i className="fas fa-memory"></i></h1>
        <h1 className="navBrandD"><i className="fas fa-memory"></i> Share Your Rig</h1>
        <div className="navContainer">
        <i className="far fa-plus-square squareM"></i>
            <ul className="navList">
            <li className="navLinkM"><i className="fas fa-share-alt"></i></li>
              <li className="navLinkM"><i className="fas fa-cogs"></i></li>
              <li className="navLinkM"><i className="fas fa-hand-spock"></i></li>
              <li className="navLinkD"><i className="far fa-plus-square squareD"></i> Post</li>
              <li className="navLinkD"><i className="fas fa-share-alt"></i> Share</li>
              <li className="navLinkD"><i className="fas fa-cogs"></i> About</li>
              <li className="navLinkD"><i className="fas fa-hand-spock"></i> Contact</li>
            </ul>
        </div>
      </nav>
  );
    };
};
