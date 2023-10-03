const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const querystring = require('querystring');

// Create a connection to the MySQL database
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Serve the HTML page with buttons for both insertion and retrieval
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const htmlPage = fs.readFileSync('employee.html', 'utf8');
        res.end(htmlPage);
    } else if (req.method === 'POST' && req.url === '/addEmployee') {
        // Handle insertion (POST request)
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const employee = querystring.parse(data);


            // Insert employee data into the 'employees' table
            const sql = `INSERT INTO employee_db (name, email, designation) VALUES (?, ?, ?)`;
            const values = [employee.name, employee.email, employee.designation];

            dbConnection.query(sql, values, (err, result) => {
                if (err) {
                    console.error('Database error:', err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ message: 'Error inserting data.' }));
                } else {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ message: 'Employee data inserted successfully.' }));
                }
            });
        });
    } else if (req.method === 'GET' && req.url === '/getEmployees') {
        // Handle retrieval (GET request)
        // SELECT query to retrieve all employees
        const sql = 'SELECT * FROM employee_db';

        dbConnection.query(sql, (err, results) => {
            if (err) {
                console.error('Database error:', err);
                res.statusCode = 500;
                res.end(JSON.stringify({ message: 'Error fetching data.' }));
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(results));
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Start the HTTP server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
