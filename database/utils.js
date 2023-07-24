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

const postGoal = (body) => {
  var { goal, quantity, user_, category, order_ } = body;
  return db
    .query(
      `INSERT INTO goals (goal, quantity, current, user_, category, order_, deactivated) VALUES ('${goal}', ${quantity}, 0, '${user_}', ${category}, ${order_}, false);`
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

const patchGoalCurrentReset = async (body) => {
  try {
    for (let i = 0; i < body.length; i++) {
      await db.query(`UPDATE goals SET current = 0 WHERE id = ${body[i]};`);
    }
    return true;
  } catch (err) {
    return err;
  }
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

const postActivity = (body) => {
  var { activity, category, user_, start_date } = body;
  return db
    .query(
      `INSERT INTO timeline (activity, category, user_, start_date, end_date) VALUES ('${activity}', '${category}', '${user_}', '${start_date}', null);`
    )
    .then(() => {
      return true;
    })
    .catch((err) => {
      return err;
    });
};

const getActivities = (query) => {
  var { user_, days } = query;
  let beginningDate = new Date();
  beginningDate.setDate(beginningDate.getDate() - days);
  beginningDate = beginningDate.toISOString();
  return db
    .query(
      `SELECT * FROM timeline WHERE user_ = '${user_}' AND start_date > '${beginningDate}';`
    )
    .then((data) => {
      return data.rows;
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getGoals,
  postGoal,
  patchGoalCurrent,
  patchGoalCurrentReset,
  patchGoalOrder_s,
  patchGoalDeactivated,
  postActivity,
  getActivities,
};
