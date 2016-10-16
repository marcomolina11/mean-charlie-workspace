// load Quote model
var mongoose = require('mongoose');
//Registering Schema as a model
var Dog = mongoose.model('Dog');

module.exports = {
	index: function(req, res){
		Dog.find({}, function(err, results){
      		if (err) { console.log(err); }
      		res.render('index', { dogs: results });
   		});
	},
	new: function(req, res){
		res.render('new');
	},
	edit: function(req, res){
		Dog.find({ _id: req.params.id }, function(err, result){
    		if (err) { console.log(err); }
    		res.render('edit', { dog: result[0]});
  		});
	},
	show: function(req, res){
		Dog.find({ _id: req.params.id }, function(err, result){
    		if (err) { console.log(err); }
   			res.render('show', { dog: result[0]});
  		});
	},
	create: function(req, res){
		Dog.create(req.body, function(err, result){
    		if (err) { console.log(err); }
    		res.redirect('/');
  		});
	},
	update: function(req, res){
		Dog.update({_id: req.params.id }, req.body, function(err, result){
    		if (err) { console.log(err); }
    		res.redirect('/');
 		 });
	},
	delete: function(req, res){
		Dog.remove({ _id: req.params.id }, function(err, result){
    		if (err) { console.log(err); }
    		res.redirect('/');
    	});
	}
}