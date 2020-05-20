import { Route, Redirect } from "react-router-dom";
import React from "react";
import ParkAreasList from './attractions/ParkAreasList';
import ItineraryList from './itineraries/ItineraryList';
import ItineraryForm from './itineraries/ItineraryForm';
import Login from "./user/Login";
import Register from "./user/Register";

const ApplicationViews = props => {
  return (
    <>
      <h1>SATURDAY IN THE PARK</h1>
      <Route exact path="/" render={props => {
        return <ParkAreasList
          {...props}
        />
      }}/>
      <Route exact path="/myitinerary" render={props => {
        return <ItineraryList
          {...props}
        />
      }}/>
      <Route exact path="/myitinerary/new" render={props => {
        return <ItineraryForm
          {...props}
        />
      }}/>
      <Route exact path="/login" render={props => {
        return <Login
          {...props}
        />
      }}/>
      <Route exact path="/register" render={props => {
        return <Register
          {...props}
        />
      }}/>
    </>
  )
}

export default ApplicationViews;