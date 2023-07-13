require("dotenv").config();
const express = require("express");
const path = require("path");
const postgreSQL = require("../database/index.js"); // imported/required just to test if the connection can work to EC2 instance hosted PostgreSQL database

const app = express();
app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", function (req, res) {
  res.render("index.html");
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
