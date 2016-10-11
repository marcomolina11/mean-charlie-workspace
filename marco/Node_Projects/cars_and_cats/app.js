//get dependencies
var http = require('http');
var fs = require('fs');
var port = 7077;

//create server using http module
var server = http.createServer(function (request, response){
	// log the requested url
	console.log('client request URL: ', request.url);
	if (request.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/cars/new'){
		fs.readFile('views/new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/stylesheets/style.css'){
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/car1.jpg'){
		fs.readFile('images/car1.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/car2.jpg'){
		fs.readFile('images/car2.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
		else if(request.url === '/images/car3.jpg'){
		fs.readFile('images/car3.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
		else if(request.url === '/images/car4.jpg'){
		fs.readFile('images/car4.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
		else if(request.url === '/images/cat1.jpg'){
		fs.readFile('images/cat1.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
		else if(request.url === '/images/cat2.jpg'){
		fs.readFile('images/cat2.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
		else if(request.url === '/images/cat3.jpg'){
		fs.readFile('images/cat3.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}
		else if(request.url === '/images/cat4.jpg'){
		fs.readFile('images/cat4.jpg', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/jpg'});
			response.write(contents);
			response.end();
		});
	}

	else{
		response.writeHead(404);
		response.end('File not found!!!');
	}

});
//tell server which port to run on
server.listen(port);
//print the port to the terminal
console.log("Running in localhost at port 7077");

