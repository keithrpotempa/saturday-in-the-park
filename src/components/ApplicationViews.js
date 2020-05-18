import { Route, Redirect } from "react-router-dom";
import React from "react";
import ParkAreasList from './attractions/ParkAreasList'

const ApplicationViews = props => {
  return (
    <>
      <Route exact path="/" render={props => {
        return <ParkAreasList
          {...props}
        />
      }}/>
    </>
  )
}

export default ApplicationViews;