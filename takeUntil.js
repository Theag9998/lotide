const eqArrays = function(array1, array2) {
  let value = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
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

const assertArraysEqual = function(array1, array2) {
	
  if (eqArrays(array1, array2)) {
    console.log(`🙂Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`☹️ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
  // ...
  const results = [];
	
  for (let item of array) {
    if (callback(item) === true) {
      return results;
    } else {
      results.push(item);
    }
  }

  return results;

};




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



assertArraysEqual((results1), [1, 2, 5, 7, 2]);
assertArraysEqual((results2), ["I've", "been", "to", "Hollywood"]);
