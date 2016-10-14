var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 8000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Connect to db
mongoose.connect('mongodb://localhost/quoting_dojo_redux');

//Create Schema
var QuoteSchema = new mongoose.Schema({
	name: String,
	quote: String
}, {timestamps: true});

//Registering Schema as a model
var Quote = mongoose.model('Quote', QuoteSchema);

//ROUTES
app.get('/', function(req, res){
	res.render('index');
;})

app.get('/quotes', function(req, res){
	Quote.find({}, function(err, results){
		if (err) { console.log(err); }
		console.log(results);
		res.render('quotes', { quotes: results });
	});
});

app.post('/create', function(req, res){
	Quote.create(req.body, function(err, result){
		if (err) { console.log(err); }
		res.redirect('/quotes');
	});
});

// Setting our server to listen to port
app.listen(port, function() {
	console.log("listening on port ", port);
});