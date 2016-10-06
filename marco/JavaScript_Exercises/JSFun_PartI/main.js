//random array manipulations
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i=0; i < x.length; i ++){
	console.log(x[i]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

//find the sum of all numbers from 1 to 500
var sum = 0;
for (var i=1; i<=500; i++){
	sum += i;
}
console.log("The sum is: " + sum);

//find the min
var arr = [1, 5, 90, 25, -3, 0];
min = arr[0];
for (i=1; i<arr.length; i++){
	if (arr[i] < min){
		min = arr[i];
	}
}
console.log("The min is: " + min);

//find the avg
var arr = [1, 5, 90, 25, -3, 0];
sum = 0;
for (var i=0; i < arr.length; i++){
	sum += arr[i];
}
var avg = sum / arr.length;
console.log("The avegare is: " + avg);

//Navigate through an object
var new_ninja = {
 name: 'Marco',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'DC'
}

for (var key in new_ninja){
	console.log(key, new_ninja[key]);
}