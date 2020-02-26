var db = require("../models");


module.exports = function(app) {

  // app.get("/:coaches", function(req, res) {
  //   db.coaches
  //     .findAll({})
  //     .then(function(dbCoaches) {
  //       console.log(dbCoaches);
  //       res.render("coaches", {
  //         firstname: dbProducts.firstname,
  //         lastname: dbProducts.lastname,
  //         picture: dbProducts.picture,
  //         category: dbProducts.category,
  //         location: dbProducts.location,
  //         fee: dbProducts.fee,
  //         languages: dbProducts.languages,
  //         personalstatement: dbProducts.personalstatement,
  //         education: dbProducts.education,
  //         opendays: dbProducts.opendays,
  //         ratings: dbProducts.ratings,
  //         testimonials: dbProducts.testimonials,
  //       });
  //     });
  // });

  app.get("/:category", function(req, res) {
    db.coaches
      .findAll({ where: { category: req.params.category } })
      .then(function(dbCoaches) {
        console.log(dbCoaches);
        res.render("category", {
          coaches: dbCoaches,
          category: req.params.category
        });
      });
  });


};
