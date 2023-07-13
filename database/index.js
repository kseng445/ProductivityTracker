const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
});

client.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to PostgreSQL database: 'productivitytracker'");
});

module.exports = client;
