
let numbers = [1,2,3,4];
let another = numbers;

//! Solution 1
numbers = []; // this doesn't work if array is a const

console.log(numbers); // returns []

console.log(another); // returns [1,2,3,4] // because it isn't referenced


// this solution works if you don't have any other references to the original array

//! Solution 2 ( RECOMMENDED )

let numbers1 = [1,2,3,4];

numbers1.length = 0;

console.log(numbers1); // returns []


//! Solution 3

let numbers2 = [1,2,3,4];

numbers2.splice(0, numbers2.length); // 0 is where to start from, numbers2.length is how much to delete

console.log(numbers2); // returns []


//! Solution 4 ( NOT RECOMMENDED )

let numbers3 = [1,2,3,4];

while (numbers3.length > 0) {
  numbers3.pop();
};
  


console.log(numbers3); // returns []