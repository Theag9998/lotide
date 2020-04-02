const assertArraysEqual = function(array1, array2) {
	
  if (eqArrays(array1, array2)) {
    console.log(`🙂Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`☹️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  let value = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      //console.log(array1[i] === array2[i], "testing")
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
};


const letterPositions = function(sentence) {
  const results = {};
  // loop through each letter in the sentence
  for (let i = 0; i < sentence.length; i++) {


    // if the letter is equal to a space
    if (i === " ") {
			
    } else { // if letter is a letter
      //if the letter is in multiple places in the sentence
      if (results[sentence[i]]) {
        results[sentence[i]].push(i); //push the letters index
      } else { //if the letter is only at one place in the sentence
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
