var db = require("../models");
var app = require('express').Router();
var connection = require('mysql');



  const SELECT_ALL_COACHES_QUERY = "SELECT * FROM users";

  app.get("/", (req, res) => {
    res.send('Working')
  })


//   THIS CODE GETS ALL THE USERS
  app.get("/api/users", function(req, res) {
    
    db.users.findAll({}).then(function(dbUsers) {
      console.log(dbUsers);
      return res.json(dbUsers);
      
    });
  });



// THIS CODE ADDS A NEW USER TO THE DATABASE
app.post('/api/users/register', async (req, res) => {

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 
    console.log(salt);
    console.log(hashedPassword);

    let sql = "INSERT INTO users SET ?";
    let post = {
      // this must be updated
        email: req.body.email,
        password: hashedPassword
    }

    connection.query(sql, post, (err, result) => {
    if(err){
        res.send("There was an error registering the new user");
        console.log("There was an error registering the new user:" + err);

    }else{
        res.send("The user was registered succesfully");
        console.log("The user was registered succesfully");

    };
  });
});





// THIS CODE LOGS IN A COACH
app.post('/users/login', (req, res) => {
    
  let sql = "SELECT email, password FROM users WHERE ?";
  let theUser = req.body.email;   
  let theSecretCode = req.body.password 

  console.log("The user is: " + theUser);
  console.log("The password is: " + theSecretCode);

  let q = connection.query (sql, {email: theUser}, async (err, result) => {
      console.log(result);
      if(result.length === 0){
          return res.status(400).send('Sorry. We did not find your user');
      }try{
          if(await bcrypt.compareSync(req.body.secretCode, result[0].secretCode)){ 
              console.log("User succesfully logged in!");
              res.send("User succesfully logged in!");

              
          }else{
              console.log('The username and passwords do not match!');
              res.send('The username and passwords do not match!');
          }
          
      }catch(err){
          console.log(err);
          res.status(500).send("We found the following error: " + err);
      }
  });

  console.log(q.sql);

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