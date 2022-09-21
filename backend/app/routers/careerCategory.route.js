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

  app.get("/createCategory", controller.createCategory)
  app.post("/getCategory", controller.getcategory)

  module.exports = app;