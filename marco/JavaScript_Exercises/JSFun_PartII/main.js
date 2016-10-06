//find the sum of all numbers from x to y
function sumitup(x, y){
	var sum = 0;
	for (var i=x; i<=y; i++){
		sum += i;
	}
	console.log("The sum is: " + sum);
}

//find the min
var arr = [1, 5, 90, 25, -3, 0];
function findMin(arr){
	min = arr[0];
	for (i=1; i<arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

//find the avg
var arr = [1, 5, 90, 25, -3, 0];
function findAvg(arr){
	sum = 0;
	for (var i=0; i < arr.length; i++){
		sum += arr[i];
	}
	var avg = sum / arr.length;
	return avg;
}

//As anonymous functions assigned to variables

var sumation = function(x, y){
	var sum = 0;
	for (var i=x; i<=y; i++){
		sum += i;
	}
	console.log("The sum is: " + sum);
}

var minimum = function(arr){
	min = arr[0];
	for (i=1; i<arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

var average = function(arr){
	sum = 0;
	for (var i=0; i < arr.length; i++){
		sum += arr[i];
	}
	var avg = sum / arr.length;
	return avg;
}

//As methods of an object

var anObject = {
	//find the sum of all numbers from x to y
	sumitup: function(x, y){
		var sum = 0;
		for (var i=x; i<=y; i++){
			sum += i;
		}
		console.log("The sum is: " + sum);
	},

	//find the min
	findMin: function (arr){
		min = arr[0];
		for (i=1; i<arr.length; i++){
			if (arr[i] < min){
				min = arr[i];
			}
		}
		return min;
	},

	//find the avg
	findAvg: function(arr){
		sum = 0;
		for (var i=0; i < arr.length; i++){
			sum += arr[i];
		}
		var avg = sum / arr.length;
		return avg;
	},
}