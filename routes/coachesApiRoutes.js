var db = require("../models");
var app = require('express').Router();

  app.get("/", (req, res) => {
    res.send('Working')
  })

  //GET ALL COACHES
  app.get("/all", function(req, res) {
    
    db.coaches.findAll({}).then(function(dbCoaches) {
      console.log(dbCoaches);
      return res.json(dbCoaches);
      
    });
  });


  //GET ALL COACHES OF ONE GIVEN CATEGORY
  app.get("/api/coaches/:category", function(req, res) {
    
    db.coaches.findAll({
      where: {category: req.params.category}
    }).then(function(dbCoaches) {
      console.log(dbCoaches);
      return res.json(dbCoaches);
      
    });
  });


  // app.get("/api/email/:email", function(req, res) {
  //   db.Coaches
  //     .findAll({
  //       where: {
  //         email: req.params.email
  //       }
  //     })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });

  // Create a new coach
  // app.post("/api/coaches", function(req, res) {
  //   db.Coaches.create(req.body).then(function(dbCoaches) {
  //     res.json(dbCoaches);
  //   });
  // });

  // Delete a coach by id
  // app.delete("/api/coaches/:id", function(req, res) {
  //   db.Coaches
  //     .destroy({ where: { id: req.params.id } })
  //     .then(function(dbCoaches) {
  //       res.json(dbCoaches);
  //     });
  // });

  // Update a coach by id
  // app.put("/api/coaches", function(req, res) {
  //   db.Coaches
  //     .update(req.body, {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbCoaches) {
  //       res.json(dbCoaches);
  //     });
  // });





  module.exports = app;