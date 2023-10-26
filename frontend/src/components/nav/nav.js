import React from 'react';
import { Link } from 'react-router-dom';
import './nav'
import logo from '../images/FlavourFinderLogo.png';




const Nav = () => {
    return (
      <nav className="navbar">
          <div className="logo-section">
        <div className='small_logo'>
            <img className='small_logo' src={logo} alt='recipe generator' />
          </div>
          <div className='brand-title-container'>
            <Link className="brand-link" title='Home' to="/">
              <span className="brand">FlavourFinder</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  };


export default Nav