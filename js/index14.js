"use strict";

let num = 50;

while (num <= 55) {
	console.log(num);
	num++;
}


do { // выполняем это пока условие соблюдается
	console.log(num);
	num++;
}
while (num < 60);

for (let i = 1; i < 10; i++) {
	
	if (i == 7) {
		continue; // продолжает, но пропускает если 7
	}
	if (i == 9) { // останавливает цикл
		break;
	}
	console.log(i);
}