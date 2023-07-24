require("dotenv").config();
const express = require("express");
const path = require("path");
const postgreSQL = require("../database/index.js"); // imported/required just to test if the connection can work to EC2 instance hosted PostgreSQL database
const utils = require("../database/utils.js");
const {
  getGoals,
  postGoal,
  patchGoalCurrent,
  patchGoalCurrentReset,
  patchGoalOrder_s,
  patchGoalDeactivated,
  postActivity,
  getActivities,
} = utils;

const app = express();
app.use(express.json());
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

app.get("/goals", (req, res) => {
  getGoals(req.query)
    .then((goals) => {
      res.status(200).send(goals);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.post("/goals", (req, res) => {
  postGoal(req.body).then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.patch("/goals/current", (req, res) => {
  patchGoalCurrent(req.body).then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.patch("/goals/reset", (req, res) => {
  patchGoalCurrentReset(req.body).then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.patch("/goals/order_", (req, res) => {
  patchGoalOrder_s(req.body).then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.patch("/goals/deactivate", (req, res) => {
  patchGoalDeactivated(req.body).then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.post("/timeline", (req, res) => {
  postActivity(req.body).then((result) => {
    if (result === true) {
      res.sendStatus(201);
    } else {
      console.error(result);
      res.sendStatus(500);
    }
  });
});

app.get("/timeline", (req, res) => {
  getActivities(req.query)
    .then((activities) => {
      res.status(200).send(activities);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
