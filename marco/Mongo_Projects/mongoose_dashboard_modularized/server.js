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

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// DATABASE
// require mongoose config file
require('./server/config/mongoose.js');

//ROUTES
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(port, function() {
    console.log("listening on port ", port);
});