const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.json({
message: "CI/CD Pipeline is Working!"
});
});
app.get("/health", (req, res) => {
res.status(200).json({
status: "OK"
});
});
app.get("/version", (req, res) => {
res.json({
version: "1.0.1"
});
});
module.exports = app;