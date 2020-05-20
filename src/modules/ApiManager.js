const url = "http://localhost:8000"

export default {
  getAll(datatype) {
    return fetch(`${url}/${datatype}`)
      .then(result => result.json())
  }
}