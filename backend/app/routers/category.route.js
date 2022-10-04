const express = require('express');
const app = express();

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const controller = require('../controllers/category.controller');

app.get('/getcategory', controller.getCategory);
app.post('/createcategory', controller.createCategory);

module.exports = app;
