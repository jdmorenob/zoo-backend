'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Routes

//middlewares of body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Headings and CORS

// Body-parser Routes
app.get('/probando', (req, res) => {
	res.status(200).send({message:'metodo probando'});
})

module.exports = app;