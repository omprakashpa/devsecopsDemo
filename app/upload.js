/*
====================================================
upload.js


insecure file path
construction pattern for SAST .
====================================================
*/

const path = require("path");
const fs = require("fs");

/*
====================================================
Path Traversal Demo

Example Request:
GET /download?file=report.txt

====================================================
*/

exports.downloadFile = (req, res) => {

    const fileName = req.query.file || "";

    // Intentionally insecure path construction
    const requestedPath = path.join(__dirname, "uploads", fileName);

    res.json({
        message: "Path Traversal Training Demo",
        requestedFile: fileName,
        resolvedPath: requestedPath,
        note: "Validate filenames and restrict access to approved directories."
    });

};
