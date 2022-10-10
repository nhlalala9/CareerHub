const express = require("express"); // import express library
const cors = require("cors"); //import cors module
const app = express(); //Initialize express

const client = require("./app/configs/db.config");
 
require ("./app/configs/dotenv");//Import your environmental configs

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5050;

// const routename = require("routeFilepath");

const careerCategory = require("./app/routers/careerCategory.route");
const careerpath = require ("./app/routers/careerpath.route");
const category =require ("./app/routers/category.route");
const qualification =require("./app/routers/qualification.route");
const question =require("./app/routers/question.route");
const requirements =require("./app/routers/requirement.route");
const salaryimage =require("./app/routers/salaryImage.route");
const summary =require("./app/routers/summary.route");
const suggestion = require("./app/routers/suggestion.route");




// app.use('/api', routename);

app.use('/api' ,careerCategory);
app.use('/api',careerpath);
app.use('/api',category);
app.use('/api',qualification);
app.use('/api',question);
app.use('/api',requirements);
app.use('/api',salaryimage);
app.use('/api',summary);
app.use('/api', suggestion)




client.connect((error) =>{ // Connect to the Database
    if (error) {
      }
   else {
     console.log("Data logging initialised");
    }
 
 });

 app.get("/", (request, response) =>{
    response.status(200).send("Server Initialized and Online. Ready to take OFF!");
});

app.listen(port, process.env.baseURL , () =>{  
    console.log(`Here we go, All Engines started at ${port}.`) 
 })
 