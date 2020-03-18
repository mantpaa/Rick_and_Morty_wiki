import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Logo from './assets/Rick_and_Morty_logo.png';
function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav><img src={Logo}></img>
      {/* <h3>Logo</h3>
      <ul className="nav-links">
        <Link style = {navStyle} to="/about">
        <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
        <li>Shop</li>
        </Link>
        
      </ul> */}
    </nav>
  );
}

export default Nav;
