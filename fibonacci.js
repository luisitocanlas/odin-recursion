function fibs(num) {
	if (num <= 0) return [];
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	let array = [0, 1];

	for (let i = 2; i < num; i++) {
		array.push(array[i - 1] + array[i - 2]);
	}

	return array;
}

// console.log(fibs(0));
// console.log(fibs(1));
// console.log(fibs(2));
// console.log(fibs(4));
// console.log(fibs(8));
// console.log(fibs(16));

function fibsRec(num) {
	if (num <= 0) return [];
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	const fibs = fibsRec(num - 1);
	fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
	return fibs;
}

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(4));
console.log(fibsRec(8));
console.log(fibsRec(16));
