import React, { Component } from 'react';
import './TopNav.css';

export default class TopNav extends Component {
  render(){
    return (
        <nav className="navBar">
        <h1 className="navBrandM">Logo</h1>
        <h1 className="navBrandD">Share Your Rig</h1>
        <div className="navContainer">
            <ul className="navList">
            <li className="navLinkM">Nav</li>
              <li className="navLinkM">Nav</li>
              <li className="navLinkM">Nav</li>
              <li className="navLinkD">Nav Button</li>
              <li className="navLinkD">Nav Button</li>
              <li className="navLinkD">Nav Button</li>
            </ul>
        </div>
      </nav>
  );
    };
};
