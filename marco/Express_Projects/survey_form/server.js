//require express
var express = require("express");
//path module
var path = require("path");
// create express app
var app = express();
var bodyParser = require('body-parser');
//use it!
app.use(bodyParser.urlencoded({ extended: true}));
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting up ejs adn our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//ROUTES
//handle '/' 
app.get('/', function(req, res){
	res.render("index");
})
//handle '/result'
var user = {};
app.get('/result', function(req, res){
	res.render("result", {user:user});
})
app.post('/result', function(req, res){
	user = req.body;
	console.log(user);
	res.redirect('/result');
})

//tell express to listen on port 8000
app.listen(8000, function(){
	console.log("listening on port 8000");
})

