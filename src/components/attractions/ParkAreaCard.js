import React, { useEffect, useState } from "react";

const ParkAreasList = props => {
  const park = props.park;
  const attractions = props.attractions;

  return (
    <>
      <h3>{park.name}</h3>
      <p>Theme: {park.theme}</p>
      <ul>
      {attractions.map(attraction => 
        <li key={`attraction-${attraction.id}`}>
          {attraction.name}
        </li>
      )}
      </ul>
    </>
  )
}

export default ParkAreasList
