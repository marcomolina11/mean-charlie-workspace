// load Quote model
var mongoose = require('mongoose');
//Registering Schema as a model
var Friend = mongoose.model('Friend');

// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    //your code here
    res.json({placeholder:'index'});
  };
  this.create = function(req,res){
    //your code here
    res.json({placeholder:'create'});
  };
  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController();