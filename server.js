const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 8080;
const routes = require("./routes/coachesApiRoutes");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/", routes);

//connect to mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "LeicaMySQL911*",
    database: "coachingDB"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);
});
