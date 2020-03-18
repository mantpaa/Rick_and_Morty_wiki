import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Logo from '../assets/Rick_and_Morty_logo.png';
function Nav() {

  return (
    <nav>
      <Link to="/"><img src={Logo} alt="Rick and Morty Logo"></img></Link>
      
    </nav>
  );
}

export default Nav;
