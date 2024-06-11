
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers)
  sum += n; //same as (sum = sum + n)

console.log(sum); // returns 5

//! REDUCING can make all elements of an array into a single value
//can be a number, string, object etc


// Walkthrough: acc = 0, cV = 1 => a = 1,
// a = 1, cV = -1 => a = 0,
// a = 0, cV = 2 => a = 2,
// a = 2, cV = 3 => a = 5;
 const sum1 = numbers.reduce((accumulator, currentValue) => { 
  
  // accumulator is the 'sum' and the currentValue goes through each element of an array and adds it to sum

  return accumulator + currentValue;

}, 0); // the 0 initialises the accumulator to 0 

console.log(sum1); // returns 5

//! NOT initlaising accumilator just means the first step is skipped so it doesnt matter

