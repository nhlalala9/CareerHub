const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

const controller = require("../controllers/requirement.controller");

app.post("/createRequirements", controller.createRequirements);

module.exports = app;
