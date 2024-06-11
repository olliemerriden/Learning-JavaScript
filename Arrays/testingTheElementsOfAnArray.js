
const numbers = [1, 2, 3];


// this method will go through all of the values in the array above and as soon as it finds a value that is negative it will return false

//! Every function goes from start of array until it find the value when stops the search regardless of if it has checked every value

const allPositive = numbers.every(function(value) {
  return value >= 0; // check if value is positive
});

console.log(allPositive); // returns true as there is no negative numbers

//! Some checks to see if at least one element exists regardless of order 

const numbers1 = [-1, -2, 1];

const atLeastOnePositive = numbers1.some(function(value) {
  return value >= 0; // check if value is positive
});

console.log(atLeastOnePositive);// returns true as there is one positive number


