app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
  $scope.friends = [];
  $scope.friend = {};
  friendsFactory.getFriend($routeParams.id, function(returnedData){
    $scope.friend = returnedData;
  });
    $scope.update = function(){
      friendsFactory.update($scope.friend, function(returnedData){
        $scope.friend = {};
        $location.url('/');
      });

    }
}]);