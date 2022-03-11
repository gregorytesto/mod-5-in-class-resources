// Primes
// Understand the problem

// Inputs: number - 10
// Output: array - [2,3,5,7]

// Make plan

// iterate for loop starting at 2 and going up to given number

//  Use modulo to determine whether a number is prime

// Accumulator pattern

// Execute Plan

// 3

// const calcIsPrime = (num) => {
// 	let isPrime = true;
// 	for (let j = 2; j < num; j++) {
// 		if (num % j === 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	return isPrime;
// };

// const findPrimes = (limit) => {
// 	let accum = [];

// 	for (let i = 2; i <= limit; i++) {
// 		let isPrime = calcIsPrime(i);
// 		if (isPrime) {
// 			accum.push(i);
// 		}
// 	}

// 	return accum;
// };

// let output = findPrimes(5);
// console.log(output);

// Hashtag
// Understand the problem

// Input = 1
// Output
// #

// Input = 7
// Output
// #
// ##
// ###
// ####
// #####
// ######
// #######

// Make a plan

// for loop from 1 to input number to determine lines
// Inside for loop from 1 to input number to number of hashtags

// Execute

function printHashtags(num) {
	let accum = [];
	// ["#", "##", "###", "####", "#####"]
	for (let i = 1; i <= num; i++) {
		let hashTags = "";
		for (let j = 1; j <= i; j++) {
			hashTags += "#";
		}
		accum.push(hashTags);
	}
	for (let line of accum) {
		console.log(line);
	}
}

printHashtags(50);
// #
// ##
// ###
// ####
// #####
