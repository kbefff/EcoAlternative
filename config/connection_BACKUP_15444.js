// Pull in required dependencies
var mysql = require('mysql');

<<<<<<< HEAD

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "PoopaSQL!",
  database: "eco_alternative"
});
=======
// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
  // DB is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // DB is local on localhost
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'eco_alternative'
  })
};
>>>>>>> master

// Make the connection to MySQL
connection.connect(function (err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;