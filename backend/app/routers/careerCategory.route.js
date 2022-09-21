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

  app.get("/createCategory", controller.getCategory)
  app.post("/getCategory", controller.createCategory)

  module.exports = app;