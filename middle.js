const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
	let middleElements = [];
	const middleIndex = Math.floor((array.length) / 2);
	//these to values are what is added to array
	let value1 = 0;
	let value2 = 0;
// if the array is less than two need to return empty array
	if (array.length > 2) {
// if the array has an odd total length: return 1 value [value1]
		if (array.length % 2 !== 0) {
			value1 = array[middleIndex];
			middleElements = [value1];
			// if the array has an even  total length: return 2 values [value1, value2]
		} else if (array.length % 2 === 0) {
			value1 = array[middleIndex - 1];
			value2 = array[middleIndex];
			middleElements = [value1, value2];
		}

	} else {
		return middleElements;
	}
	return middleElements;
}

module.exports = middle;