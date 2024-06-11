
const numbers = [1,2,3,4];


// END 
const last = numbers.pop();
console.log(numbers); // removes the 4 returns 1,2,3 

// BEGINNING
const first = numbers.shift();
console.log(numbers); // returns 2,3    it has removed the 1


// MIDDLE
const middle = numbers.splice(2, 1); 
// 2 represents the index of the starting number
// 1 represents the number of elements that you want to remove

console.log(numbers); // returns 1,2,4