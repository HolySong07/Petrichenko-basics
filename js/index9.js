"use strict";

console.log(4 + "5"); // - result string
console.log(4 + 4); // - result string

let incr = 10,
	decr = 10;

	incr++; // увел на 1
	decr--; // уменьшаем на 1

	console.log(incr); 
	console.log(decr); 

	console.log(2*4 == 8); // true
	console.log(2*4 == "8"); // true
	console.log(2*4 === "8"); // false

	let isChecked = true,
		isClose = true;

	console.log(isChecked && isClose);  // true

	let isChecked2 = true,
	isClose2 = false;

console.log(!isChecked2 || isClose2);  // false