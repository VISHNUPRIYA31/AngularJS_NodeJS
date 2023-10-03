// Import the mysql2 library
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',         // Replace with your MySQL host
  user: 'root',     // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'angular', // Replace with your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define the SQL query to insert values into the 'users' table

const insertQuery = 'INSERT INTO employees (EmployeeName, EmployeeCity,EmployeeCountry) VALUES (?, ?, ?)';
const valuesToInsert = ['Vishnu', 'India','India']; // Replace with the values you want to insert

// Execute the SQL query
connection.query(insertQuery, valuesToInsert, (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }

  // Process the insert result
  console.log(`Inserted ${results.affectedRows} row(s) into the 'users' table`);

  // Close the database connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing connection:', err);
    }
    console.log('Connection closed');
  });
});
