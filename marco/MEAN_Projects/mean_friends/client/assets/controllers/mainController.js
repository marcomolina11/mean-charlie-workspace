app.controller('mainController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
	$scope.friends = [];
	var index = function(){
    	friendsFactory.index(function(returnedData){
        	$scope.friends = returnedData;
   		});
  	};
  	index();


	// friendsFactory.getFriends(function(data){
	// 	console.log(data);
	// 	$scope.friends = data;
	// });


	$scope.delete = function(id){
		friendsFactory.delete(id, function(returnedData){
			$scope.friends = returnedData;
		});
	};
}])