import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar"

const SaturdayInThePark = props => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated())
  
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  }

  return (
    <>
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <NavBar 
              hasUser={hasUser}
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