const express = require("express");
const app = express();

const bodyparser = require("body-parse");

app.use(bodyparser.urlencoded({
    extended: true,
}));


app.use(bodyparser.json());


const controller = require("../controllers/summary.controller");

app.post("/createSummary",controller.createSummary);
app.get("/getSummary",controller.getAllSummary);

module.exports = app;
