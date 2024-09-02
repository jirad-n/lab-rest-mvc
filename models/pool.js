const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "admin_user",
  password: "secret_password",
  database: "lab_post_comment",
});

module.exports = pool;
