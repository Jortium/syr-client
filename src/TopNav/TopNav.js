import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

export default class TopNav extends Component {
  render(){
    return (
        <nav className="navBar">
        <h1 className="navBrandM"><Link to='/'><i className="fas fa-memory"></i></Link></h1>
        <h1 className="navBrandD"><Link to='/'><i className="fas fa-memory"></i> Share Your Rig</Link></h1>
        <div className="navContainer">
        <Link to='/post'><i className="far fa-plus-square squareM"></i></Link>
            <ul className="navList">
            <li className="navLinkM"><Link to='/board'><i className="fas fa-cogs"></i></Link></li>
              <li className="navLinkM"><Link to='/about'><i className="fas fa-cogs"></i></Link></li>
              <li className="navLinkM"><Link to='/contact'><i className="fas fa-hand-spock"></i></Link></li>
              <li className="navLinkD"><Link to='/board'><i className="far fa-plus-square squareD"></i> Post</Link></li>
              <li className="navLinkD"><Link to='/post'><i className="far fa-plus-square squareD"></i> Post</Link></li>
              <li className="navLinkD"><Link to='/about'><i className="fas fa-cogs"></i> About</Link></li>
              <li className="navLinkD"><Link to='/contact'><i className="fas fa-hand-spock"></i> Contact</Link></li>
            </ul>
        </div>
      </nav>
  );
    };
};
