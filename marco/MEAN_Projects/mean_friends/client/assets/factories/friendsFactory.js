app.factory('friendsFactory', ['$http', function($http){
	//constructor for our factory
	var friends = [];
	var friend = {};
	function FriendsFactory(){
		var _this = this;

		this.create = function(newFriend, callback){
			$http.post('/friends', newFriend).then(function(returned_data){
				// console.log('Data on Factory: ', returned_data.data);
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};
		this.update = function(friend, callback){
			console.log(friend._id);
			$http.patch(`/friends/${ friend._id }`, friend).then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
		};

		this.index = function(callback){
			$http.get('/friends').then(function(returned_data){
				console.log("returned data.data", returned_data.data);
				friends = returned_data.data;
				callback(friends);
			});
		};
		this.delete = function(id, callback){
			$http.delete(`/friends/${id}`).then(function(returned_data){
				if (returned_data){
					friends = returned_data.data;
					if (typeof(callback) == 'function'){
						callback(returned_data.data);
					}
				}
			});
    	};
    	this.show = function(id, callback){
        	$http.get(`/friends/${id}`).then(function(returned_data){
				if (typeof(callback) == 'function'){
					callback(returned_data.data);
				}
			});
    	};
    	// Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    	this.getFriends = function(callback){
      		callback(friends);
    	};
    	this.getFriend = function($routeParams, callback){
    		if (friends.length == 0){
				_this.show($routeParams, function(returned_data){
					friend = returned_data;
					callback(friend);
				});
    		}
    		else{
				for (var i=0; i < friends.length; i++){
    				if (friends[i]._id == $routeParams){
    					friend = friends[i];
    					callback(friend);
    				}
    			}
    		}
    	};
  	}
  	console.log(new FriendsFactory());
  	return new FriendsFactory();
}]);