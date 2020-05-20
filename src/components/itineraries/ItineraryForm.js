import React, { useEffect, useState } from "react";
import ApiManager from "../../modules/ApiManager"

const ItineraryForm = props => {
  const [attractions, setAttractions] = useState([])  
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

  const handleFieldChange = (evt) => {
    const stateToChange = { ...formData };
    stateToChange[evt.target.id] = evt.target.value;
    setFormData(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FIXME: Customer id should auto fill based on who is logged in
    const itinerary_item = {
      start_time: formData.startTime, 
      attraction_id: formData.attractionId,
      customer_id: 1
    }

    ApiManager.post("itineraries", itinerary_item)
      .then(props.history.push("/myitinerary"))
  }

  useEffect(() => {
    getAttractions();
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
              required="" autoFocus="" />
          </div>
          
          <div>
            <label htmlFor="attractionId">Attraction</label>
            <select 
              onChange={handleFieldChange} 
              id="attractionId"
              placeholder="Attraction"
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