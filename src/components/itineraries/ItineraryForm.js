import React, { useEffect, useState } from "react";
import ApiManager from "../../modules/ApiManager"

const ItineraryForm = props => {
  const [attractions, setAttractions] = useState([])  ;
  const [formData, setFormData] = useState(
    { 
      startTime: "", 
      attractionId: "",
    }
  );
    
  const getAttractions = () => {
    return ApiManager.getAll("attractions")
      .then(setAttractions)
  }

  const getItineraryItem = itineraryId => {
    console.log("itineraryId", itineraryId)
    ApiManager.getItineraryItem(itineraryId)
      .then(resp => {
        console.log(resp)
        setFormData(
          {
            startTime: resp.starttime, 
            attractionId: resp.attraction_id
          }
        )
      })

  }

  const handleFieldChange = (evt) => {
    const stateToChange = { ...formData };
    stateToChange[evt.target.id] = evt.target.value;
    setFormData(stateToChange);
  };

  const constructItineraryItem = () => {
    const itineraryItem = {
      starttime: parseInt(formData.startTime), 
      attraction_id: parseInt(formData.attractionId),
    }

    if (props.match.params.itineraryId) {
      itineraryItem.id = parseInt(props.match.params.itineraryId);
    }

    return itineraryItem
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const itineraryItem = constructItineraryItem(); 
    console.log(itineraryItem)
    if (itineraryItem.hasOwnProperty('id')) {
      ApiManager.putItinerary(itineraryItem)
        .then(() => props.history.push("/myitinerary"))
    } else {
      ApiManager.postItinerary(itineraryItem)
        .then(() => props.history.push("/myitinerary"))
    }
  }

  useEffect(() => {
    getAttractions();
    // If this is an edit, 
    // we need to get the entry-to-edit's details
    if (props.match.params.itineraryId) {
      getItineraryItem(props.match.params.itineraryId)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h3>Add to Itinerary</h3>
        <div className="formgrid">
          
          <div>
            <label htmlFor="inputStartTime">Start Time</label>
            <input 
              onChange={handleFieldChange} 
              type="number"
              id="startTime"
              placeholder="Start Time"
              required="" 
              autoFocus=""
              value={formData.startTime} 
            />
          </div>
          
          <div>
            <label htmlFor="attractionId">Attraction</label>
            <select 
              onChange={handleFieldChange} 
              id="attractionId"
              placeholder="Attraction"
              value={formData.attractionId}
              required="" 
            >
              {attractions.map(attraction => (
                <option 
                  key={attraction.id}
                  value={attraction.id}
                >
                  {attraction.name}
                </option>
              ))}
            </select>
          </div>

        </div>
        <button type="submit">Register</button>
      </fieldset>
    </form>
  )
}

export default ItineraryForm