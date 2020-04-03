const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  let keys = Object.keys(object);
  //loop through the keys in the object
  for (let key of keys) {
    //if the key returns return in the callback
    if (callback(object[key]) === true)
    // return the first key when the callback is true
      return key;
	

  }
  return undefined; // if a key does not return true return undefined
};



const results = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 1 }
}, x => x.stars === 2));// => "noma"

const results2 = (findKey({
  'name': { random: "Thea" },
  'pie': { random: "blueberry" },
  'drink': { random: "coke" },
  'pizza': { random: "pep" },
}, x => x.random === "blueberry"));

//console.log(results2)


assertEqual(results, 'noma');
assertEqual(results2, "pie");