const url = "http://localhost:5002"

export default {
  getAll(datatype) {
    return fetch(`${url}`/${datatype})
      .then(result => result.json())
  }
}