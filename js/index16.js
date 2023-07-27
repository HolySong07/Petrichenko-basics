"use strict";

function showFirstMessage(text, name) {
	console.log(text + " " + name);
	let num = 20; // только внутри работает, но можно ее создать за функцией
}

showFirstMessage("Hello", "Max");

//
function calk(a, b) {
	return (a + b); // дальше код не будет работать
}
console.log(calk(2, 3));

//
function res() {
	var num2 = 20;
	return num2; // дальше код не будет работать
}

var num3 = res();
console.log(num3);

//
// Expression, вызывать только после объявления

let logger = function() {
	console.log("Expression");
};

logger();

/////

let call = (a, b) => a + b;

console.log(call(7, 7));

// или 