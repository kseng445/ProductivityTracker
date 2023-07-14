require("dotenv").config();
const express = require("express");
const path = require("path");
const postgreSQL = require("../database/index.js"); // imported/required just to test if the connection can work to EC2 instance hosted PostgreSQL database
const utils = require("../database/utils.js");
const { getGoals, postGoals } = utils;

const app = express();
app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/goals", async (req, res) => {
  try {
    var goals = await getGoals();
    res.status(200).send(goals);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.post("/goals", (req, res) => {
  console.log("here1");
  postGoals().then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
