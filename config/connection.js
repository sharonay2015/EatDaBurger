var mysql = require("mysql");

// Log into mysql
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sidley",
  database: "burger_db"
});

// Connect to database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports=connection;