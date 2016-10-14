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
mongoose.connect('mongodb://localhost/message_board');

//Need Schema variable
var Schema = mongoose.Schema;
//Create Post Schema
var PostSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 4},
	content: { type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

//Create Commment Schema
var CommentSchema = new mongoose.Schema({
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	name: {type: String, required: true},
	content: {type: String, required: true},
}, {timestamps: true});

//Register models
var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);

//ROUTES
app.get('/', function(req, res){
	Post.find({})
	.populate('comments')
	.exec(function(err, results){
		if (err) { console.log(err); }
		console.log(results);
		res.render('index', { posts: results });
	});
});
app.post('/create/post', function(req, res){
	Post.create(req.body, function(err, result){
		if (err) { console.log(err); }
		res.redirect('/');
	});
});
app.post('/create/comment/:post_id', function(req, res){
	Post.findOne({_id: req.params.post_id}, function(err, post){
		// get data from form and create a comment
		var comment = new Comment(req.body);
		//  set the reference like this
		comment._post = post._id;
		// now save both to the DB
		comment.save(function(err){
			post.comments.push(comment);
			post.save(function(err){
				if (err){
					console.log('Error');
				}
				else{
					res.redirect('/');
				}
			});
		});

	});
});


// Setting our server to listen to port
app.listen(port, function() {
	console.log("listening on port ", port);
});