const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page
app.get("/", (req, res) => {
    res.send("DevSecOps Vulnerable Demo Application");
});

// Register Demo Routes
app.use("/", routes);

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`);
});
