var db = require("../models");

module.exports = function(app) {

  app.get("/api/coaches", function(req, res) {
    db.coaches.findAll({}).then(function(dbCoaches) {
      res.json(dbCoaches);
    });
  });

  app.get("/api/email/:email", function(req, res) {
    db.coaches
      .findAll({
        where: {
          email: req.params.email
        }
      })
      .then(function(results) {
        res.json(results);
      });
  });

  // Create a new coach
  app.post("/api/coaches", function(req, res) {
    db.coaches.create(req.body).then(function(dbCoaches) {
      res.json(dbCoaches);
    });
  });

  // Delete a coach by id
  app.delete("/api/coaches/:id", function(req, res) {
    db.coaches
      .destroy({ where: { id: req.params.id } })
      .then(function(dbCoaches) {
        res.json(dbCoaches);
      });
  });

  // Update a coach by id
  app.put("/api/coaches", function(req, res) {
    db.dbCoaches
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCoaches) {
        res.json(dbCoaches;
      });
  });
};
