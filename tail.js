const assertEqual = require('./assertEqual');

const tail = function(actual) {
  let newTail = actual.slice(1);
  return newTail;
};

module.exports = tail;
