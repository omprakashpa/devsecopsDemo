const express = require("express");
const router = express.Router();

const database = require("./database");
const auth = require("./auth");
const upload = require("./upload");
const axios = require("axios");

/*
====================================================
Home Page
====================================================
*/
router.get("/", (req, res) => {
    res.send("Welcome to DevSecOps Vulnerable Demo");
});

/*
====================================================
SQL Injection Demo
Example:
http://localhost:3000/user?id=1
====================================================
*/
router.get("/user", database.getUser);

/*
====================================================
Command Injection Demo
Example:
http://localhost:3000/ping?host=8.8.8.8
====================================================
*/
router.get("/ping", (req, res) => {
    auth.pingHost(req, res);
});

/*
====================================================
Login Demo
Example:
POST /login
====================================================
*/
router.post("/login", (req, res) => {
    auth.login(req, res);
});

/*
====================================================
Path Traversal Demo
Example:
http://localhost:3000/download?file=test.txt
====================================================
*/
router.get("/download", (req, res) => {
    upload.downloadFile(req, res);
});

/*
====================================================
Reflected XSS Demo
Example:
http://localhost:3000/search?name=John
====================================================
*/
router.get("/search", (req, res) => {

    const name = req.query.name;

    res.send("<h2>Welcome " + name + "</h2>");

});

/*
====================================================
Hardcoded Secret Demo
====================================================
*/
router.get("/config", (req, res) => {

    res.json({
        apiKey: "1234567890abcdef",
        environment: "Development"
    });

});

/*
====================================================
Health Check
====================================================
*/
router.get("/health", (req, res) => {

    res.json({
        status: "UP"
    });

});

module.exports = router;

====================================================
Reachability
====================================================
router.get("/fetch", async (req, res) => {

    const url = req.query.url;

    const response = await axios.get(url);

    res.send(response.data);

});
