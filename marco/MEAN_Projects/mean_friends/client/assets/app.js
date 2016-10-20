var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'mainController'
		})
		.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'newController'
		})
		.when('/:id/edit', {
			templateUrl: 'partials/edit.html',
			controller: 'editController'
		})
		.when('/show/:id', {
			templateUrl: 'partials/show.html',
			controller: 'showController'
		})
		.otherwise({
			redirectTo: '/'
		})
});