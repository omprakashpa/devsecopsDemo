

const jwt = require("jsonwebtoken");

/*
====================================================
Hardcoded Credentials (Intentional)
====================================================
*/

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "Admin@123";

/*
====================================================
Hardcoded JWT Secret (Intentional)
====================================================
*/

const JWT_SECRET = "mySuperSecretKey123";

/*
====================================================
Demo Login
====================================================
*/

exports.login = (req, res) => {

    const { username, password } = req.body;

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        const token = jwt.sign(
            {
                username: ADMIN_USERNAME,
                role: "admin"
            },
            JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.json({
            message: "Login Successful",
            token: token
        });

    }

    return res.status(401).json({
        message: "Invalid Credentials"
    });

};

/*
====================================================
Command Execution Demo (Non-executable Placeholder)

====================================================
*/

exports.pingHost = (req, res) => {

    const host = req.query.host || "";

    res.json({
        message: "Command execution demo (disabled)",
        commandExample: `ping ${host}`,
        note: "Never pass untrusted input directly to OS commands."
    });

};
