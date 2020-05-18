import React, { useEffect, useState } from "react";
import ApiManager from "../../modules/ApiManager"
import ParkAreaCard from "./ParkAreaCard"

const ParkAreasList = props => {
  const [parkAreas, setParkAreas] = useState([])
  const [attractions, setAttractions] = useState([])

  const getParkAreas = () => {
    return ApiManager.getAll("areas")
      .then(setParkAreas)
  }

  const getAttractions = () => {
    return ApiManager.getAll("attractions")
      .then(setAttractions)
  }

  useEffect(() => {
    getParkAreas();
    getAttractions();
  }, [])

  return (
    <>
      <h3>PARK AREAS LIST</h3>
      {parkAreas.map(park => 
        <ParkAreaCard 
          key={`park-${park.id}`}
          park={park}
          attractions={attractions.filter(attraction => attraction.area_id === park.id)}
        />        
      )}
    </>
  )
}

export default ParkAreasList