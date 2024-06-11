
const numbers = [3, 4];

// add to End 
numbers.push(5, 6);

console.log(numbers); //returns [3, 4, 5, 6]



// add to Beginning 

numbers.unshift(1, 2);

console.log(numbers); // returns [1, 2, 3, 4, 5, 6]



// add to Middle

numbers.splice(2, 0, 'a', 'b'); //returns [1, 2, 'a', 'b', 3, 4, 5, 6]

// 2 represents the index it starts at (index starts at 0)
// the 0 is how many numbers to delete
// the 'a' and 'b' is what to be added



console.log(numbers);