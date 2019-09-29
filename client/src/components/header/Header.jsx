import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Header = ({ authenticated, logoutUser }) => (
  <header className="bg-primary">
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand text-white">
          Templates
        </NavLink>
        <ul className="row">
          {authenticated ? (
            <li className="nav-item">
              <button className="nav-link  text-white" onClick={logoutUser}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link  text-white"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-link  text-white"
                  activeClassName="active"
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
}

export default Header;
