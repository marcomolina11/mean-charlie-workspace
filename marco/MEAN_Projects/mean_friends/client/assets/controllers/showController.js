app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams){
	$scope.friend = {};
	friendsFactory.getFriend($routeParams.id, function(returnedData){
		$scope.friend = returnedData;
	});
}]);