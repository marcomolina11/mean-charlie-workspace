function VehicleConstructor(name, wheels, passengers){
	//empty vehicle object
	var vehicle = {};

	//public properties
	vehicle.name = name;
	vehicle.wheels = wheels;
	vehicle.passengers = passengers;

	//public methods 
	vehicle.makeNoise = function(){
		console.log("Vroom vroom!");
	}

	//return vehicle object
	return vehicle;
}

// Creating a bike
var bike = VehicleConstructor("Bike", 2, 1);
//Redefining the bike's makeNoise method
bike.makeNoise = function(){
	console.log("Ring ring!");
}
//calling the bike's makeNoise
bike.makeNoise();

// Creating a sedan
var sedan = VehicleConstructor("Sedan", 4, 5);
//Redifining the sedan's makeNoise method
sedan.makeNoise = function(){
	console.log("Honk honk!")
}
//calling the sedan's makeNoise
sedan.makeNoise();

// Creating a bus
var bus = VehicleConstructor("Bus", 6, 50);
// Addin a method to bus
bus.addPassengers = function(passengers){
	bus.passengers += passengers;
	return bus;
}

// Running the new method and loggin result
bus.addPassengers(5).addPassengers(5);
console.log(bus.passengers);
