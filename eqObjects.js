const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`☹️ Assertion Failed: ${actual} !== ${expected}`);
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



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false