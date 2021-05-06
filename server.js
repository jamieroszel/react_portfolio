// Import dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const projects = require('./projects.json');
const about = require('./about.json');

// Create app object
const app = express();

// set up middleware
app.use(cors());

// home route for testing our app
app.get('/', (req, res)=>{
    // send projects via JSON
    res.send("Hello World!");
});
// home route for testing our app
app.get('/projects', (req, res)=>{
    // send projects via JSON
    res.json(projects);
});

// route for retrieving 'about' info
app.get('/about', (req, res)=>{
    // send projects via JSON
    res.json(about);
});

// declare a variable for port number
const PORT = process.env.PORT || 4000;

// turn on server listener
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));