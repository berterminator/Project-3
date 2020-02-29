var db = require("../models");
var app = require('express').Router();
var connection = require('mysql');




  const SELECT_ALL_COACHES_QUERY = "SELECT * FROM coaches";

  app.get("/", (req, res) => {
    res.send('Working')
  })

  // app.get("/coaches", (req, res) => {

  //   return connection.query(SELECT_ALL_COACHES_QUERY, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.send(err);
  //     }
  //     else {
  //       console.log(results);
  //       return res.status(200).json(
  //          results
  //       );
          
  //     }
  //   })
  // });

  app.get("/api/coaches", function(req, res) {
    
    db.coaches.findAll({}).then(function(dbCoaches) {
      console.log(dbCoaches);
      return res.json(dbCoaches);
      
    });
  });



  // const SELECT_COACHES_BY_CATEGORY = "Select * FROM coaches where ?"

  // app.get("/coaches/:category", function(req, res) {
  //   connection.query(SELECT_COACHES_BY_CATEGORY, {category=req.params.category}, (err, results) => {
  //     if (err) {
  //       return res.send(err);
  //     }
  //     else {
  //       return res.json({
  //         data: results
  //       });
  //     }
  //   })
  // });

  
  

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