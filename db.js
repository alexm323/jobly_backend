"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

// const db = new Client({
//   connectionString: getDatabaseUri(),
// });

// db.connect();
var db = new pg.Client({
  user: "admin",
  password: "guest",
  database: "Jobly",
  port: 5432,
  host: "localhost",
  ssl: true
}); 
db.connect();
module.exports = db;
