const bodyparser = require("body-parser");

// const express = require(bodyparser)
const express = require("express");
const app = express();

app.use(
    bodyparser.urlencoded({
        extended: true
    })
);

app.use(bodyparser.json());

const controller = require("../controllers/question.controller");

app.post("/createQuestion", controller.createQuestions);

module.exports = app;