const assert = require('chai').assert;
const middle = require('../middle');

describe("middle", () => {
  it("return an empty array when there is only 1 value in the array", () => {
    assert.deepEqual(middle([1]), []);
	});
	it("return an empty array when there is only 2 values in the array", () => {
    assert.deepEqual(middle([1, 2]), []);
	});
	it("return the middle value when there is an uneven number of values in the array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
	});
	it("return the two middle values when there is an even number of values in the array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
	});
	it("return the original array to make sure it wasn't changed", () => {
		const array = [4, 5, 6]
		middle(array)
		assert.deepEqual(array, [4, 5, 6]);
	});
});
