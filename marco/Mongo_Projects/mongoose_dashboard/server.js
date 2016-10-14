// Require the Express Module
var express = require('express');
// Require path
var path = require('path');
// Require mongoose
var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Create port variable
var port = 8000;
// Create an Express App
var app = express();
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));


// This is how we connect to the mongodb database using mongoose -- "mongoose_dashboard" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/mongoose_dashboard');

//Creating a schema
var DogSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  color: String
});
// Register Schema as a model
var Dog = mongoose.model('Dog', DogSchema);

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root 
app.get('/', function(req, res) {
    Dog.find({}, function(err, results){
      if (err) { console.log(err); }
      res.render('index', { dogs: results });
    });
});
// /new 
app.get('/new', function(req, res) {
    res.render('new');
})
// /:id/edit
app.get('/:id/edit', function(req, res){ 
  Dog.find({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.render('edit', { dog: result[0]});
  })
})
// /:id
app.get('/:id/show', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.render('show', { dog: result[0]});
  })
})
app.post('/create', function(req, res){
  // Create a new dog
  Dog.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  })
})
app.post('/:id/update', function(req, res){
  // Update a dog
  Dog.update({_id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  })
})
app.post('/:id/delete', function(req, res){
  //Delete a dog
  Dog.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  })
})


// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port ", port);
})