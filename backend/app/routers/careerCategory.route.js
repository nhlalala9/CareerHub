const express = require("express");
const app = express();

const bodyparser = require("body-parser");

app.use(
    bodyparser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyparser.json());
  
  const controller = require("../controllers/careerCategory.controller")

  app.get("/getcareerCategory", controller.getCategory)
  app.post("/createCareerCategory", controller.createCategory)

  module.exports = app;