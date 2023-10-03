const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',         // Replace with your MySQL host
    user: 'root',     // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'angular', // Replace with your MySQL database name
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle POST request when the form is submitted
app.post('/insert', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Define the SQL query to insert values into the 'users' table
    const insertQuery = 'INSERT INTO employees (EmployeeName, EmployeeCity,EmployeeCountry) VALUES (?, ?, ?)';

    // Execute the SQL query
    connection.query(insertQuery, [name, email,name], (err, results, fields) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error inserting data');
            return;
        }

        // Data successfully inserted
        res.send('Data inserted successfully');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
