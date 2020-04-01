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

	const without = function (sourceArray, itemsToRemove) {
		let newArray = sourceArray
		for (var i = 0; i < itemsToRemove.length; i++) {
				newArray = sourceArray.filter(a => a !== itemsToRemove[i])
			
		}


		return newArray
	}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))// => ["1", "2"])



 	const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(words)
assertArraysEqual(words, ["hello", "world", "lighthouse"]);