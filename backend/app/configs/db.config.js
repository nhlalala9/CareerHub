const Pool = require("pg").Pool;

DB_URL =
  "postgres://kbbhbatzjgmemj:c659674f5c56fdb6a31e10ca62c21c11a5037ebfdb16e2cf4cc6adbfe9d8baeb@ec2-3-219-135-162.compute-1.amazonaws.com:5432/dl2ct75pd33i2";
//Connecting to heroku database
const pool = new Pool({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
