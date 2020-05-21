const url = "http://localhost:8000"

export default {
  getAll(datatype) {
    return fetch(`${url}/${datatype}`)
      .then(result => result.json())
  },
  getItinerary() {
    return fetch(`${url}/itineraries`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
      }
    })
      .then(result => result.json())
  },
  postItinerary(dataToPost) {
    return fetch(`${url}/itineraries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
      },
      body: JSON.stringify(dataToPost)
    }).then(result => result.json());
  },
  post(datatype, dataToPost) {
    return fetch(`${url}/${datatype}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToPost)
    }).then(result => result.json());
  }
}