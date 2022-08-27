const env = require('./env');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: env.host,
  user: env.user,
  password: env.password,
  database: env.database,
});

module.exports = db;
