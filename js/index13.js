"use strict";

/* if (4 == 3) {
	alert(123);
} else {
	alert("error");
} */

let num = 50;

if (num < 49) {
	console.log("error");
} else if (num > 100) {
	console.log("error");
} else {
	console.log("ok");
}


(num == 50) ? console.log("ok") : console.log("error"); 

switch (num) {
	case 49: 
		console.log("no");
		break;
	case 100:
		console.log("no");
		break;
	case 51:	
		console.log("yes");
		break;
	default:
		console.log("Ничего не сработало");
}
