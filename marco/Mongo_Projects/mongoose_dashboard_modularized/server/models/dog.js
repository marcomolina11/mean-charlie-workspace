var mongoose = require('mongoose');

//Creating a schema
var DogSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  color: String
});
// Register Schema as a model
var Dog = mongoose.model('Dog', DogSchema);