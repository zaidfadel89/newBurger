const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "bm51qe4telbc1psg",
    password: "oqzwpu6yz0ytacol",
    database: "sscx0yp50gwa1thu"
  });
}
connection.connect();
module.exports = connection;
