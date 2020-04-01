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
		console.log(`🙂Assertion Passed: ${array1} === ${array2}`)
	} else {
		console.log(`☹️ Assertion Failed: ${array1} !== ${array2}`)
	}
}




const middle = function(array) {
	let middleElements = [];
	const middleIndex = Math.floor((array.length) / 2);
	//these to values are what is added to array
	let value1 = 0;
	let value2 = 0;
// if the array is less than two need to return empty array
	if (array.length > 2) {
// if the array has an odd total length: return 1 value [value1]
		if (array.length % 2 !== 0) {
			value1 = array[middleIndex]
			middleElements = [value1]
			// if the array has an even  total length: return 2 values [value1, value2]
		} else if (array.length % 2 === 0) {
			value1 = array[middleIndex - 1]
			value2 = array[middleIndex]
			middleElements = [value1, value2]
		}

	} else {
		return middleElements
	}
	return middleElements
}

console.log(middle([1]))// => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]))// => [3, 4]

const array = [4, 5, 6];
console.log(middle(array)) // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(words)
assertArraysEqual(array, [4, 5, 6]);