import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

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
            {props.hasUser
              ? <li>
                  <NavLink 
                    className="nav-link" 
                    activeClassName="active"
                    exact to="/myitinerary"
                  >
                    My Itinerary
                  </NavLink>
                </li>
              : null
            }
            {props.hasUser
              ? <li>
                  <span className="nav-link" onClick={handleLogout}> Logout </span>
                </li>
              : <>
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
                </>
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default withRouter(NavBar);