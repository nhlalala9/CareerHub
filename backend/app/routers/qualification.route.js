const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.use(
    bodyparser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyparser.json());
  
  const controller = require("../controllers/qualification.controller")

  app.post("/createQualification", controller.createQualification)
  app.get("/getQualifications/:id", controller.getQualifications)

  module.exports = app;