const assertEqual = function(actual, expected) {
	if (actual === expected) {
	console.log( `🙂Assertion Passed: ${actual} === ${expected}`)
	} else {
	console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`)
	}
};


const countLetters = function (string) {
let numOfEachLetters = {}


// loop through the letters in the string
for (letter of string) {

//if the letter is a space 
	if (letter === " ") {
		
	} else {  // if letter is not a space
		
		// if the letter appears more than once add 1
		if (numOfEachLetters[letter]) {
			numOfEachLetters[letter] += 1;
		} else { //if letter appears just once
			numOfEachLetters[letter] = 1;
		}
	}
}
return numOfEachLetters
}


console.log(countLetters("lighthouse in the house"))