import axios from "axios";

export default {
  // Gets all books
  getStepBySteps: function() {
    return axios.get("/api/stepbysteps");
  },
  // Gets the book with the given id
  getStepByStep: function(id) {
    return axios.get("/api/stepbysteps/" + id);
  },
  // Deletes the book with the given id
  deleteStepByStep: function(id) {
    return axios.delete("/api/stepbysteps/" + id);
  },
  // Saves a book to the database
  saveStepByStep: function(stepByStepData) {
    return axios.post("/api/stepbysteps", stepByStepData);
  },
  // GETS Search Bar Input
  //getSearchInfo: function(title) {
  //  return axios.get("/api/stepbysteps" + title);
  //}
};
