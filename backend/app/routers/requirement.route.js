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
app.get('/getone/:careerpathId', controller.getOneRequirement);

module.exports = app;
