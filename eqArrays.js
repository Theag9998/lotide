const assertEqual = function(actual, expected) {
	if (actual === expected) {
	console.log( `🙂Assertion Passed: ${actual} === ${expected}`)
	} else {
	console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`)
	}
};

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




console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], ["1", "2", "3"])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 