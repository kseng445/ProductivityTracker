const db = require("./index.js");

const getGoals = (query) => {
  var { user_ } = query;
  return db
    .query(`SELECT * FROM goals WHERE user_ = '${user_}';`)
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

const postGoals = (body) => {
  var { goal, quantity, user_, category } = body;
  var current = 0;
  var order_ = 0; //this needs work, rn it's mock value
  return db
    .query(
      `INSERT INTO goals (goal, quantity, current, user_, category, order_, deactivated) VALUES ('${goal}', ${quantity}, ${current}, '${user_}', ${category}, ${order_}, false);`
    )
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};

const patchGoalCurrent = (body) => {
  var { id, current } = body;
  return db
    .query(`UPDATE goals SET current = ${current} WHERE id = ${id}`)
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
  patchGoalCurrent,
};
