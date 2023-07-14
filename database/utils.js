const db = require("./index.js");

const getGoals = () => {
  return db
    .query(`SELECT * FROM goals;`)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

const postGoals = () => {
  var goal = "Do 10 hours of gamedev";
  var quantity = 10;
  var current = 0;
  var user_ = "Kevin";
  var category = 1;
  var order_ = 0;
  return db
    .query(
      `INSERT INTO goals (goal, quantity, current, user_, category, order, deactivated) VALUES ('${goal}', ${quantity}, ${current}, '${user_}', ${category}, ${order_}, false);`
    )
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  getGoals,
  postGoals,
};
