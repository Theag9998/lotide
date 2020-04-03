const eqArrays = function (array1, array2) {
	let value = false
	if (array1.length === array2.length) {
		for (var i = 0; i < array1.length; i++) {
			//console.log(array1[i] === array2[i], "testing")
			if (array1[i] === array2[i]) {
				value = true
			} else {
				value = false
			}
		}
	} else {
		return value
	}
 return value
}

const assertArraysEqual = function (array1, array2) {
	
	if (eqArrays(array1, array2)) {
		console.log( `🙂Assertion Passed: ${array1} === ${array2}`)
		} else {
		console.log(`☹️ Assertion Failed: ${array1} !== ${array2}`)
		}
	}



const map = function(array, callback) {
	const results = []
	for (let item of array) {
		results.push(callback(item))
	}
return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const greeting = ['happy', 'every', 'late', 'light', 'operation']
const results2 = map(greeting, word => word[0]);

const numbers = [[1,2,3], [4,5,6], [7,8,9]]
const results3 = map(numbers, num => num[1]);

assertArraysEqual((results1), ['g', 'c', 't', 'm', 't']);
assertArraysEqual((results2), ['h', 'e', 'l', 'l', 'o']);
assertArraysEqual((results3), [2, 5, 8])
