const mysql = require("mysql");
require("dotenv").config();

const con = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected");
//   const sql =
//     "CREATE TABLE customers (id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), createdAt TIMESTAMP, updatedAt TIMESTAMP, PRIMARY KEY (id));";
//   con.query(sql, function (err, results, fields) {
//     if (err) throw err;
//     console.log("Create table.");
//   });
// });
// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected");
//   const sql = "SELECT * FROM customers;";
//   con.query(sql, function (err, results, fields) {
//     if (err) throw err;
//     console.log(results, fields);
//   });
// });
