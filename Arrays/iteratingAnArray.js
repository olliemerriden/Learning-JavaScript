// iterating means looping

const numbers = [1, 2, 3];


// for of loop
for (let number of numbers)
  console.log(number);

// for each method
numbers.forEach(function(number) {
  console.log(number);
});

//! When we call the forEach method this function above will be executed for each element in the array 
// each element will be passed as an argument to this function

// use the array function syntax to simplify
numbers.forEach(number => console.log(number));

// can also pass multiple paramiters

numbers.forEach((number, index) => console.log(index, number));