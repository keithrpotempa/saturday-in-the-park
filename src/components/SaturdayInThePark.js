import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar"

const SaturdayInThePark = props => {
  const isAuthenticated = () => sessionStorage.getItem("kennywood_token") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated())

  const setUser = resp => {
    sessionStorage.setItem("kennywood_token", resp.token)
    sessionStorage.setItem("kennywood_user_id", resp.user_id) 
    setHasUser(isAuthenticated());
  } 

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  
  return (
    <>
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <NavBar 
              hasUser={hasUser}
              clearUser={clearUser}
              {...props}
            />
          </div>
          <div className="main">
            <ApplicationViews
               hasUser={hasUser}
               setUser={setUser}
               {...props}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SaturdayInThePark;