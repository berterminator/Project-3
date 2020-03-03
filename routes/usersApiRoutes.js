var db = require("../models");
var app = require('express').Router();
var connection = require('mysql');


  app.get("/", (req, res) => {
    res.send('Working')
  });


//   THIS CODE GETS ALL THE USERS
  app.get("/all", function(req, res) {
    
   return db.users.findAll({}).then(function(dbUsers) {
      console.log(dbUsers);
      return res.json(dbUsers);
      
    });
  });


// THIS CODE ADDS A NEW USER TO THE DATABASE
app.post('/register', async (req, res) => {

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


// THIS CODE LOGS IN A USER
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

  module.exports = app;