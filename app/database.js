/*
====================================================
database.js
Purpose:
Demonstrates an intentionally vulnerable SQL query
for SAST (SQL Injection) .
====================================================
*/

// Mock database object
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "demo"
});
/*
====================================================
SQL Injection Demo

Example:
http://localhost:3000/user?id=1

Malicious Example:
http://localhost:3000/user?id=1 OR 1=1

Reason:
User input is concatenated directly into the SQL query.

Expected SAST Finding:
SQL Injection
====================================================
*/

exports.getUser = (req, res) => {

    const userId = req.query.id;

    // ❌ Intentionally vulnerable query
    const query =
        "SELECT * FROM users WHERE id = " + userId;

    connection.query(query, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json({
            message: "SQL Query Executed",
            executedQuery: query,
            data: result
        });

    });

};
