import { Route, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ParkAreasList from './attractions/ParkAreasList'

const ApplicationViews = props => {
  return (
    <>
      <h2>APPLICATION VIEWS</h2>
      <Route exact path="/" render={props => {
        return <ParkAreasList
          {...props}
        />
      }}/>
    </>
  )
}

export default ApplicationViews;