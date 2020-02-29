const express = require("express");
const app = express();
const db = require("./models");
const coachRoutes = require("./routes/coachesApiRoutes");
const userRoutes = require("./routes/usersApiRoutes")
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(cors());


//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}


// Add routes, both API and view
app.use("/api/coaches", coachRoutes);
app.use("/api/users", userRoutes);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {

        console.log("Server listening on: http://localhost:" + PORT);
    });  
});



// const mysql = require("mysql2");



// //connect to mySQL database
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "LeicaMySQL911*",
//     database: "coachingDB"
// });

// connection.connect(function (err) {
//     console.log("connected as id " + connection.threadId);
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
// });
