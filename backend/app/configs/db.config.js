const Pool = require("pg").Pool;

DB_URL =
  "postgres://cvounyikeceirs:9465bcc3ceb3a5452062b14fb89ce84bb6af84aea829d1b74f103f20faff6658@ec2-44-207-133-100.compute-1.amazonaws.com:5432/d3upi6rplg899c";
//Connecting to heroku database
const pool = new Pool({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
