import axios from "axios";

export default {
  // Gets all coaches
  getAllCoaches: function() {
    return axios.get("/all");
  },
  // Gets coaches by category
  getCoachesByCategory: function(category) {
    return axios.get("/api/coaches/"+category);
  },
  // Gets one coach given the id
  getCoach: function(id) {
    return axios.get("/api/coach/" + id);
//   },
//   // Saves a new coach to the database
//   saveCoach: function(coachData) {
//     return axios.post("/api/coaches/register", coachData);
//   },
//   saveUser: function(coachData) {
//     return axios.post("/api/users/register", coachdata);
  }
};
