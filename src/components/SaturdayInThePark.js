import React, { useState } from "react";
import ApplicationViews from "./ApplicationViews";

const SaturdayInThePark = () => {

  return (
    <>
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            {/* NAVBAR HERE */}
          </div>
          <div className="main">
            <h1>SATURDAY IN THE PARK</h1>
            <ApplicationViews />
          </div>
        </div>
      </div>
    </>
  );
}

export default SaturdayInThePark;