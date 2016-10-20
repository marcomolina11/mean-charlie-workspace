var mongoose = require('mongoose');

//Creating a schema
var FriendSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  hometown: String,
  birthday: Number,
}, {timestamp: true});
// Register Schema as a model
var Friend = mongoose.model('Friend', FriendSchema);