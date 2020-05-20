const url = "http://localhost:8000"

export default {
  getAll(datatype) {
    return fetch(`${url}/${datatype}`)
      .then(result => result.json())
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