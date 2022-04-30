const pg = require("pg");
const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "daforst",
  password: "admin",
  port: 5000,
});

module.exports = db;
