import axios from "axios";

export default {
  // Gets all books
  getStepBySteps: function() {
    return axios.get("/api/steps");
  },
  // Gets the book with the given id
  getStepByStep: function(id) {
    return axios.get("/api/steps" + id);
  },
  // Deletes the book with the given id
  deleteStepByStep: function(id) {
    return axios.delete("/api/steps" + id);
  },
  // Saves a book to the database
  saveStepByStep: function(stepByStepData) {
    return axios.post("/api/steps", stepByStepData);
  }
};
