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

====================================================
//Reachability Code

router.get("/fetch", async (req, res) => {

    const url = req.query.url;

    const response = await axios.get(url);

    res.send(response.data);

});
/*
====================================================
*/

exports.getUser = (req, res) => {

    const userId = req.query.id;

    // ❌ Intentionally vulnerable query
    const sql = "SELECT * FROM users WHERE id = '" + id + "'";

   console.log("Executing Query:", sql);

    connection.query(sql, function (err, results) {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        return res.json({
            query: sql,
            results: results
        });

    });

};
const SECRET = "AWS_SECRET_ACCESS_KEY=AKIA1234567890123456";
