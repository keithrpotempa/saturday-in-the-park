import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header>
        <h1 className="site-title">
          Kennywood Park
          <br />
          <small>An amusement park. Not a kennel.</small>
        </h1>
        <nav>
          <ul className="container">
            <li>
              <NavLink 
                className="nav-link" 
                activeClassName="active"
                exact to="/"
              >
                Home
              </NavLink>
            </li>
            {/* Make login/register an if/then */}
            <li>
              <NavLink 
                className="nav-link" 
                activeClassName="active"
                exact to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                className="nav-link" 
                activeClassName="active"
                exact to="/register"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default withRouter(NavBar);