//require express
var express = require("express");
//path module
var path = require("path");
//create express app
var app = express();
//static content
app.use(express.static(path.join(__dirname, "./static")));
//setting ejs and our views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//ROUTES
//handle '/'
app.get('/', function(req, res){
	res.render("index", {count:count});
})

//tell express to listen on port 8000
var server = app.listen(8000, function(){
	console.log("listening on port 8000");
})
//get the socket.io module
var io = require('socket.io').listen(server)
//The count will be initialized and stored here
var count = 0;
//HERE WE WILL ADD OUT SOCKET CODE
io.sockets.on('connection', function(socket){
	console.log("Someone has connected using sockets!");
	console.log(socket.id);
	//Events the server is listening to...
	socket.on("epic_click", function(){
		count += 1;
		//Server response
		//Full Broadcast
		io.emit('updated_count', {response: count});
	})
	socket.on("reset_click", function(){
		count = 0;
		io.emit('updated_count', {response: count});
	})

})