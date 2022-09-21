const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
const controller = require("../controllers/careerpath.controller");

app.post("/createcareerpath", controller.createcareerpath);
app.get("/getcareerpath", controller.getcareerpath);

module.exports = app;
