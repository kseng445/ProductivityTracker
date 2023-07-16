const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
});

pool.connect((err, client) => {
  if (err) {
    throw err;
  }
  console.log(`Connected to PostgreSQL database: ${process.env.DBNAME}`);
});

module.exports = pool;
