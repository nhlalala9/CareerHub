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



// app.use('/api', routename);

app.use('/api' ,careerCategory);
app.use('/api',careerpath);


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
 