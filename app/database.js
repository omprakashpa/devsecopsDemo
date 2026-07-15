/*
====================================================
database.js
Purpose:
Demonstrates an intentionally vulnerable SQL query
for SAST (SQL Injection) training.

⚠️ DO NOT USE THIS CODE IN PRODUCTION.
====================================================
*/

// Mock database object
const db = {
    query: (sql, callback) => {
        console.log("Executing Query:");
        console.log(sql);

        // Mock response
        callback(null, [
            {
                id: 1,
                username: "admin",
                email: "admin@example.com"
            }
        ]);
    }
};

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

    db.query(query, (err, result) => {

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
