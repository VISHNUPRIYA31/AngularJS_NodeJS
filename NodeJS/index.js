const express = require("express");
const database = require('./sqlconnection');

const app = express();

app.listen(5000, () => {
console.log(`Server is up and running on 5000 ...`);
});

// Use Route Function from below Examples Here...

app.get("/", (req, res) => {

	// Function to insert single row values in
// the database
let singleRowInsert = () => {
  
    let query = `INSERT INTO gfg_table 
        (name, address) VALUES (?, ?);`;
  
    // Value to be inserted
    let userName = "Pratik";
    let userAddress = "My Address";
  
    // Creating queries
    db_con.query(query, [userName, 
    userAddress], (err, rows) => {
        if (err) throw err;
        console.log("Row inserted with id = "
            + rows.insertId);
    });
};
});
