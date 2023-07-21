const db = require("./index.js");

const getGoals = (query) => {
  var { user_ } = query;
  return db
    .query(
      `SELECT * FROM goals WHERE user_ = '${user_}' AND deactivated = false;`
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

const postGoals = (body) => {
  var { goal, quantity, user_, category, order_ } = body;
  var current = 0;
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
    .query(`UPDATE goals SET current = ${current} WHERE id = ${id};`)
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};

const patchGoalOrder_s = async (body) => {
  try {
    for (let i = 0; i < body.length; i++) {
      await db.query(
        `UPDATE goals SET order_ = ${body[i].order_} WHERE id = ${body[i].id}`
      );
    }
    return true;
  } catch (err) {
    return err;
  }
};

const patchGoalDeactivated = async (body) => {
  var { idsAndOrder_s, deactivatedGoalID } = body;
  // console.log("body: ", body);
  // console.log("idsAndOrder_s: ", idsAndOrder_s);
  // console.log("deactivatedGoalID: ", deactivatedGoalID);
  try {
    for (let i = 0; i < idsAndOrder_s.length; i++) {
      await db.query(
        `UPDATE goals SET order_ = ${idsAndOrder_s[i].newOrder_} WHERE id = ${idsAndOrder_s[i].id};`
      );
    }
    await db.query(
      `UPDATE goals SET order_ = -1, deactivated = true WHERE id = ${deactivatedGoalID};`
    );
    return true;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getGoals,
  postGoals,
  patchGoalCurrent,
  patchGoalOrder_s,
  patchGoalDeactivated,
};
