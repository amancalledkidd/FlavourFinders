import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyle = {
  backgroundColor: '#3a405a',
  color: '#fffbff',
  padding: '10px',
  position: 'relative',
};

const brandStyle = {
  fontSize: '24px',
  color: '#fffbff',
  textDecoration: 'none',
};

const buttonContainerStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  backgroundColor: '#f2f2f2',
  color: '#333',
  border: 'none',
  padding: '8px 16px',
  width: '100px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '0 10px',
  borderRadius: '5px',
};



const logout = () => {
    window.localStorage.removeItem("token");
}

const AuthenticatedNav = () => {
  return (
    <nav style={{ ...navbarStyle, ...{ backgroundColor: '#3a405a' } }} className="navbar">
      <div style={navbarStyle} className="navbar">
        <span style={brandStyle} className="brand">
          FlavourFinder
        </span>
        <div style={buttonContainerStyle} className="button-container">
            <Link to="/">
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#fffbff', color: '#3a405a' } }} className="authenticated-button logout-button">
              Home
            </button>
          </Link>
          <Link to="/generator">
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#fffbff', color: '#3a405a' } }} className="authenticated-button logout-button">
              NewGenerate
            </button>
          </Link>
          <Link to="/recipe">
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#fffbff', color: '#3a405a' } }} className="authenticated-button posts-button">
              MyRecipes
            </button>
          </Link>
          <Link to="/" onClick={logout}>
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#fffbff', color: '#3a405a' } }} className="authenticated-button logout-button">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const UnauthenticatedNav = () => {
  return (
    <nav style={{ ...navbarStyle, ...{ backgroundColor: '#3a405a' } }} className="navbar">
      <div style={navbarStyle} className="navbar">
        <span style={brandStyle} className="brand">
          FlavourFinder
        </span>
        <div style={buttonContainerStyle} className="button-container">
        <Link to="/generator">
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#f2f2f2', color: '#333' } }} className="unauthenticated-button">
              new
            </button>
          </Link>
          <Link to="/login">
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#f2f2f2', color: '#333' } }} className="unauthenticated-button">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button style={{ ...buttonStyle, ...{ backgroundColor: '#f2f2f2', color: '#333' } }} className="unauthenticated-button">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const isAuthenticated = !!window.localStorage.getItem("token");

  return isAuthenticated ? <AuthenticatedNav /> : <UnauthenticatedNav />;
};

export default Navbar;