import axios from "axios";
//const BASEURL= "http://localhost:3001" ||;

export default {
  // Gets all coaches
  getAllCoaches: function() {
    return axios.get("api/coaches");
  },
  // Gets coaches by category
  getCoachesByCategory: function(category) {
    return axios.get("/api/coaches/"+ category);
  },
  // Gets one coach given the id
  getCoach: function(id) {
    return axios.get("/api/coaches/" + id);
  },
//   // Saves a new coach to the database
//   saveCoach: function(coachData) {
//     return axios.post("/api/coaches/register", coachData);
//   },
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  }
};
