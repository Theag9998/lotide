const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//test code
middle([1])// => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6])// => [3, 4]

const array = [4, 5, 6];
middle(array) // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(array, [4, 5, 6]);