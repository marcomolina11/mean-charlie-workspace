function VehicleConstructor(name, wheels, passengers, speed){
	//This is in case you forget to use the new keyword when creating the object
	if (!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, wheels, passengers, speed);
	}
	//private porperties
	var self = this;
	var distance_traveled = 0;

	//public properties
	this.name = name || "Unicycle";
	this.wheels = wheels || 1;
	this.passengers = passengers || 0;
	this.speed = speed || 0;

	//public methods 
	this.makeNoise = function(){
		console.log("Vroom vroom!");
	}
	this.move = function(){
		updateDistanceTraveled();
		this.makeNoise();
	}
	this.checkMiles = function(){
		console.log(distance_traveled);
	}


	//getters
	this.getDistance = function(){
		return distance_traveled;
	}

	//private methods
	var updateDistanceTraveled = function(){
		distance_traveled += self.speed;
	}
}

// Creating a bike
var bike = new VehicleConstructor("Bike", 2, 1, 20);

// console.log(bike.name);
// console.log(bike.wheels);
// console.log(bike.passengers);
// console.log(bike.speed);
// console.log(bike.distance_traveled);

bike.move();
console.log(bike);
console.log(bike.getDistance());
bike.checkMiles();
