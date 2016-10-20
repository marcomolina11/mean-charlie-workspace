// load User model
var mongoose = require('mongoose');
//Registering Schema as a model
var Friend = mongoose.model('Friend');
//require controller file
var friends = require('../controllers/friends.js');

module.exports = function(app){
	//index
	app.get('/friends', friends.index);
	//show
  	app.get('/friends/:id', friends.show);
  	//create
  	app.post('/friends', friends.create);
  	//update
  	app.patch('/friends/:id', friends.update);
  	//delete
  	app.delete('/friends/:id', friends.delete);
}