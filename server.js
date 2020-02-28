const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const app = express();

//const routes = require("./routes/coachesApiRoutes");

//connect to mySQL database
const connection = mysql.createConnection({
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
});

app.use(cors());

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

  
// }
// Add routes, both API and view
//app.use("/", routes);

console.log("connected as id " + connection.threadId);

app.get("/", (req, res) => {
    res.send("go to /coaches to see coaches");
});


const SELECT_ALL_PRODUCTS_QUERY = "Select * FROM coaches";

app.get("/coaches", (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            });
        }
    })
}
);


app.listen(PORT, function () {

    console.log("Server listening on: http://localhost:" + PORT);
});
