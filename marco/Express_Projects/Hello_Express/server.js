// Load express module
var express = require("express")
var bodyParser = require("body-parser");

// Invoke var express and store the resulting application in var app
var app = express();

// Using body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Tell our server to use "/static" folder for static content
app.use(express.static(__dirname + "/static"));

// Set location where express will look for ejs files
app.set('views', __dirname + '/views');
// Set the view engine itself (We are gonna use EJS)
app.set('view engine', 'ejs');

// Handle '/' route
app.get('/', function(request, response){
	//response.send("<h1>Hello Express</h1>");
	response.render('index');
})
// Handle '/users' route
app.get('/users', function(request, response){
	// hard-coded user data for now
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
app.post('/users', function(req, res){
	console.log("POST DATA \n\n", req.body);
	//code to add user to db goes here
	//redirect the user back to '/'
	res.redirect('/');
})

// Tell the express server to lsiten on port 8000
app.listen(8000, function(){
	console.log("listening on port 8000");
})
