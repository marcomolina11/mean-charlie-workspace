function runningLogger(){
	console.log("I am running!");
}

function multiplyby10(num) {
	num *= 10;
	return num;
}

function stringReturnOne(){
	return "This is a string";
}

function stringReturnTwo(){
	return "This is another string";
}

function caller(param){
	if (typeof(param) === 'function'){
		param();
	} 
}

function myDoubleConsoleLog(param1, param2){
	if (typeof(param1) === 'function'){
		console.log(param1());
	}
	if (typeof(param2) === 'function'){
		console.log(param2());
	}
}

function caller2(param){
	console.log("starting...");
	setTimeout(function(){
		if (typeof(param) === 'function'){
			param();
		}
	}, 2000);
    console.log("ending?");
    return "interesting";
}

runningLogger();
multiplyby10(5);
console.log(multiplyby10(5));
console.log(stringReturnOne());
console.log(stringReturnTwo());

caller(runningLogger);

myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

caller2(myDoubleConsoleLog);

