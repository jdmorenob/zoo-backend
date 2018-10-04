'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo', { useMongoClient: true })
		.then(() => {
			console.log('La conexion con la base de datos zoo se ha realizado correctamente');

			app.listen(port, () => {
				console.log('Servidor local con Node y Express está lanzado correctamente');
			});
		})
		.catch(err => console.log(err));