const assertEqual = require('./assertEqual');

const eqArrays = (array1, array2) => {
	let value = false;
	if (array1.length === array2.length) {
		for (var i = 0; i < array1.length; i++) {
			if (array1[i] === array2[i]) {
				value = true;
			} else {
				value = false;
			}
		}
	} else {
		return value;
	}
 return value;
}

module.exports = eqArrays;

