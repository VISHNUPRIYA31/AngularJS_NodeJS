// Import the mysql2 library
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'angular',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define the SQL query to select data from a table
const query = 'SELECT * FROM employees';

// Execute the SQL query
connection.query(query, (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }

  // Process the results
  console.log('Query results:', results);

  // Close the database connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing connection:', err);
    }
    console.log('Connection closed');
  });
});
