const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object, value) {
  //turn object into an array of keys
  let keys = Object.keys(object);



  // loop through each of the keys
  for (let key of keys) {
		

		
    //if the key is equal to the value return the value
    if (object[key] === value) {
      return key;
    }
			
  }
  // if no key is found return undefined
  return undefined;
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

//console.log(bestTVShowsByGenre['sci_fi'])
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);