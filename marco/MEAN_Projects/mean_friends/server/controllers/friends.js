// load Quote model
var mongoose = require('mongoose');
//Registering Schema as a model
var Friend = mongoose.model('Friend');

// Build out the methods in the friendsControllers below
function FriendsController(){
  var _this = this;

  this.index = function(req,res){
    Friend.find({}, function(err, results){
      if (err){ console.log(err); }
      console.log(results);
      res.json(results);
    })
  };
  this.create = function(req,res){
    console.log(req.body);
    Friend.create(req.body, function(err, result){
      if (err){ console.log(err); }
      res.json(result);
    })
  };
  this.update = function(req,res){
    Friend.update({_id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    })
  };
  this.delete = function(req,res){
    Friend.remove({ _id: req.params.id }, function(err, result){
      if (err){
        res.json(err) 
      }
      else{
        _this.index(req, res);
      }
    })
  };
  this.show = function(req,res){
    Friend.findOne({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    });
  };
}
module.exports = new FriendsController();