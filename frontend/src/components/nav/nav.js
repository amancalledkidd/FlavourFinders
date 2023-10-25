import React from 'react';
import { Link } from 'react-router-dom';
import './nav'




const Nav = () => {
    return (
      <nav className="navbar">
          <div className="button-container">
            <Link title='Home' to="/">
              <span className="brand">FlavourFinder</span>
            </Link>
          </div>
      </nav>
    );
  };


export default Nav