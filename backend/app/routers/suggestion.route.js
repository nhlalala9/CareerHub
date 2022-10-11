//creating routes for getting requirements 

const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

const controller = require("../controllers/suggestion.controller");

app.get('/getsuggestion/:id', controller.getsuggested);

module.exports = app;

