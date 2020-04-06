const assert = require('chai').assert;
const tail = require('../tail')

describe("tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
	});
	it("returns 3 for the length of original array [Yo Yo, Lighthouse, Labs]", () => {
		const words = ["Yo Yo", "Lighthouse", "Labs"]
		tail(words)
		assert.deepEqual(words.length, 3);
	});
	it("returns 2 for the length of the tail array [Hello, Lighthouse, Labs]", () => {
		const words = ["Hello", "Lighthouse", "Labs"]
		assert.deepEqual(tail(words).length, 2);
	});

	it("returns lighthouse for the first index of the tail array [Hello, Lighthouse, Labs]", () => {
		const words = ["Hello", "Lighthouse", "Labs"]
		const result = tail(words)
		assert.deepEqual(result[0], "Lighthouse");
	});
	it("returns labs for the second index of the tail array [Hello, Lighthouse, Labs]", () => {
		const words = ["Hello", "Lighthouse", "Labs"]
		const result = tail(words)
		assert.deepEqual(result[1], "Labs");
	});
});

