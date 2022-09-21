const express = require("express");
const app = express();

const bodyparser = require("body-parse");

app.use(bodyparser.urlencoded({
    extended: true,
}));

app.use(bodyparser.json());

const controller = require("../controllers/salaryImage.controller");

app.use("/createSalary",controller.createSalary);
app.use("/getSalary",controller.getAllSalary);

module.exports = app;