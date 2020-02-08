//integrating modules
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//setting up express app
const app = express();

//connecting to db
mongoose.connect('mongodb://localhost:27017/directory');
mongoose.Promise = global.Promise;

//introducing middleware
app.use(bodyParser.json());

//routing done here
app.use('/', routes);


//connecting to port
app.listen(process.env.port||4000, function(){
    console.log('listening to port');
});