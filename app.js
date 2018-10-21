'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Routes
var user_routes = require('./routes/user');

//middlewares of body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Headings and CORS

// Body-parser Routes
app.use('/api', user_routes);

module.exports = app;