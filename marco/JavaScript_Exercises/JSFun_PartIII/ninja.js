function ninjaConstructor(name, cohort){
	// name, cohort, and belt-level, levelUp
	var ninja = {}
	var belts = ["yellow", "red", "black"]
	ninja.name = name;
	ninja.cohort = cohort;
	ninja.beltLevel = 0;
	ninja.levelUp = function(){
		if (ninja.beltLevel < 2){
			ninja.beltLevel += 1;
			ninja.belt = belts[ninja.beltLevel];
		}
		return ninja;
	}
	ninja.belt = belts[ninja.beltLevel];
	return ninja;
}

var ninjaMarco = ninjaConstructor("Marco", "DC - Betas")
console.log(ninjaMarco);
ninjaMarco.levelUp().levelUp();
console.log(ninjaMarco);
