// Understanding the problem:
// What is median? Middle number
// input: array of numbers
// Output: number

// Create a plan:

// Sort the array
// Find the middle number
//      Using length
//      Handle an even number of element array
//      Handle an odd number of element array

function findMedian(arr) {
	arr.sort((a, b) => a - b);

	let midIndex = Math.floor(arr.length / 2);

	if (arr.length % 2 === 1) {
		return arr[midIndex];
	} else {
		let firstNum = midIndex - 1;
		let secondNum = midIndex;
		return (arr[firstNum] + arr[secondNum]) / 2;
	}
}

let numArr = [1, 30, 5, 10, 61, 50, 5, 100, 5, 0]; // How to find the middle element

let output = findMedian(numArr);
console.log(output);
