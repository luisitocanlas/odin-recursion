function mergeSort(array) {
	// base case
	if (array.length <= 1) {
		return array;
	}

	// divide array in two halves
	const mid = Math.floor(array.length / 2);
	const left = array.slice(0, mid);
	const right = array.slice(mid);

	// Recursively sort each half and merge
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let sortedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// compare elements of the two arrays and merge them in sorted order
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			sortedArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			sortedArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// concat any remaining elements
	return sortedArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
