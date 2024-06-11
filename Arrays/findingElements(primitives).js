// Numbers, boolean values, and the null and undefined types are primitive. 
//Objects, arrays, and functions are reference types

const numbers = [1, 2, 3, 1, 4];

// IndexOf pass element you are looking for, if it exists in the array, it will return th index in the array
//! Index starts at 0

console.log(numbers.indexOf('a')); // returns -1 as this element doesn't exist

console.log(numbers.indexOf(1)); // returns 0

console.log(numbers.indexOf(3)); // returns 2

console.log(numbers.indexOf('1')); //the type of element matters, it has to match



// lastIndexOf returns the last instance of the passed value

console.log(numbers.lastIndexOf(1)); // returns 3


// To see if a element exists in a given array

console.log(numbers.includes(1)); //shows if the number passed through exists in the array 



console.log(numbers.indexOf(1, 2)); // returns 3, the second number represents where the search starts from
