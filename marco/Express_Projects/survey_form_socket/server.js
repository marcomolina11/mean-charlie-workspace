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
//setting up ejs and our views folder
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
var server = app.listen(8000, function(){
	console.log("listening on port 8000");
})
//this gets the socket.io module
var io = require('socket.io').listen(server)

// THIS CODE NEEDS TO BE ADDED AND CORRECTED
// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
	console.log("WE ARE USING SOCKETS!");
	console.log(socket.id);
	//all the socket code goes in here!
	//This is the event the server is listening to.
	socket.on("posting_form", function (data){
    	console.log(data);
    	var random_number = Math.floor((Math.random() * 1000) + 1);
    	//These are the server responses
		socket.emit("updated_message", {response: data});
		socket.emit("random_number", {response: random_number});    	
	})
})


