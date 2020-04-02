const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);

	
  // if both the objects have the same length
  if (Object.keys(object1).length === Object.keys(object2).length) {
    //loop through the keys of object1 to compare to object2
		
    for (let key of keys1) {
			
      // if values in the object are equal to arrays return true or false
      if (Array.isArray(object1[key]) && Array.isArray(object2[key]))  {

        return 	eqArrays(object1[key], object2[key]);
			
			
        //if object1[key] are the same as object2[key] return true
			
      } else if (object1[key] !== object2[key]) {
				
        return false;
      }
		
		
		
    }
    return true;

  }

  return false;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🙂Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`☹️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = {name: "Thea", kitty: "Mika"};
const object2 = {name: "Thea", kitty: "Mika"};
console.log(assertObjectsEqual(object1, object2));

