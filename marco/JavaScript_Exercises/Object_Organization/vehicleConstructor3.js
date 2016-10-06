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
	this.VIN = this.genVIN();

	//public methods 
	this.updateDistanceTraveled = function(){
		distance_traveled += self.speed;
	}

	//getters
	this.getDistance = function(){
		console.log(distance_traveled);
		return distance_traveled;
	}
}
//creating an instance method
VehicleConstructor.prototype.makeNoise = function(){
	console.log("Vroom vroom!");
	return this;
}
//Another instance method
VehicleConstructor.prototype.move = function(){
	this.makeNoise();
	this.updateDistanceTraveled();
	return this;
}
//A third instance method
VehicleConstructor.prototype.checkMiles = function(){
	this.getDistance();
}
//Additional method
VehicleConstructor.prototype.genVIN = function(){
	var VIN = ''
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	for (var i=0; i < 17; i++){
		VIN += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return VIN;
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
bike.checkMiles();

console.log(bike.VIN);
