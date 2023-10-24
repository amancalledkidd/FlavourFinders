import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import recipe_generator from '../images/recipe_generator.svg';
import login_icon from '../images/login.svg';
import logout_icon from '../images/logout.svg';
import sign_up from '../images/sign_up.svg';
import saved_recipe from '../images/saved_recipe.svg';


const logout = () => {
    window.localStorage.removeItem("token");
}

const AuthenticatedNav = () => {
  return (
    <nav className="navbar">
        <div className="button-container">
          <Link to="/">
            <span className="brand">FlavourFinder</span>
          </Link>
          <Link title='Recipe Generator' className='links' to="/generator">
            <img className='recipe_generator' src={ recipe_generator } alt='chef hat with heart' />
          </Link>
          <Link title='Saved Recipe(s)' className='links' to="/my_recipes">
            <img className='saved_recipe' src={ saved_recipe } alt='clipboard with heart' />
          </Link>
          <Link title='Log Out' className='links' to="/" onClick={logout}>
            <img className='logout_icon' src={ logout_icon } alt='locked key' />
          </Link>
        </div>
    </nav>
  );
};

const UnauthenticatedNav = () => {
  return (
    <nav className="navbar">
        <div className="button-container">
          <Link to="/">
            <span className="brand">FlavourFinder</span>
          </Link>
          <Link title='Recipe Generator' className='links' to="/generator">
            <img className='recipe_generator' src={ recipe_generator } alt='recipe generator' />
          </Link>
          <Link title='Login' className='links' to="/login">
            <img className='login_icon' src={ login_icon } alt='unlocked key' />
          </Link>
          <Link title='Sign Up' className='links' to="/signup">
            <img className='sign_up' src={ sign_up } alt='user id card' />
          </Link>
        </div>
    </nav>
  );
};

const Navbar = () => {
  const isAuthenticated = !!window.localStorage.getItem("token");

  return isAuthenticated ? <AuthenticatedNav /> : <UnauthenticatedNav />;
};

export default Navbar;