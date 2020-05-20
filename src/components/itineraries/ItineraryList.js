import React, { useEffect, useState } from "react";
import ApiManager from "../../modules/ApiManager"

// TODO: FINISH THIS -- it is only half-coded
// Big question: how do you get the user id of the logged in user?
// Is it stored in session storage when they login/register?
// Is it retrieved, adhoc, using their token?
const ItineraryList = props => {
  const [parkAreas, setParkAreas] = useState([])
  const [attractions, setAttractions] = useState([])
  const [itinerary, setItinerary] = useState([])

  const getParkAreas = () => {
    return ApiManager.getAll("parkareas")
      .then(setParkAreas)
  }

  const getAttractions = () => {
    return ApiManager.getAll("attractions")
      .then(setAttractions)
  }

  const getItinerary = () => {
    return ApiManager.getAll("interary")
      .then(setItinerary)
  }

  useEffect(() => {
    getParkAreas();
    getAttractions();
  }, [])

  return (
    <>
      <h3>MY ITINERARY</h3>
      <a href="/myitinerary/new">Add to Itinerary</a>
    </>
  )
}

export default ItineraryList