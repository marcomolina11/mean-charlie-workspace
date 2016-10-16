// load Quote model
var mongoose = require('mongoose');
//Registering Schema as a model
var Dog = mongoose.model('Dog');
//require controller file
var dogs = require('../controllers/dogs.js');

module.exports = function(app){
	app.get('/', function(req, res){
		dogs.index(req, res);
	});
	app.get('/new', function(req, res){
		dogs.new(req, res);
	});
	app.get('/:id/edit', function(req, res){ 
		dogs.edit(req, res);
	});
	app.get('/:id/show', function(req, res){
		dogs.show(req, res);
	});
	app.post('/create', function(req, res){
		dogs.create(req, res);
	});
	app.post('/:id/update', function(req, res){
		dogs.update(req, res);
	});
	app.post('/:id/delete', function(req, res){
		dogs.delete(req, res);
	});
}