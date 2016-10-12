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
	data = {
		users: users,
		messages: messages
	}
	res.render("index", data);
})

//tell express to listen on port 8000
var server = app.listen(8000, function(){
	console.log("listening on port 8000");
})
//get the socket.io module
var io = require('socket.io').listen(server)

users = [];
messages = [];

var is_user = function(user){
	var users_count = users.length;
	for (var i=0; i < users_count; i++){
		if (user == users[i]){;
			return true;
		}
	}
	return false;
}

io.sockets.on('connection', function(socket){
	console.log("Someone has connected using sockets!");
	console.log(socket.id);
	//Events the server is listening to...
	socket.on('new_user_connected', function(data){
		console.log(data);
		if (is_user(data.user) === true){
			socket.emit("existing_user", {error: "This user already exists!"})
		}
		else{
			var new_user_notice = " has joined the chat..."
			messages.push({user: data.user, message: new_user_notice, joined:true})
			users.push(data.user);
			socket.emit('load_messages', {current_user: data.user, messages: messages});
			socket.broadcast.emit('new_user_joined', {user: data.user, message: new_user_notice});
		}
	})
	socket.on('post_message', function(data){
		console.log(data);
		messages.push({user: data.user, message: data.message, joined:false});
		io.emit('post_new_message', {new_message: data.message, user: data.user});
	})
})