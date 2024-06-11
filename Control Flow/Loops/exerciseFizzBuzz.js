
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not Divisible by 3 or 5 => input;
//Not a number => 'Not a Number'

// const output = fizzBuzz(3);
// console.log(output);

// let input = 2;
// function fizzBuzz(input) { 
//   if (input % 3 === 0){
//     console.log("Fizz");
//   }
//   else if (input % 5 === 0){
//     console.log("Buzz");
//   }
//   else if (input % 5, 3 === 0) {
//     console.log("FizzBuzz");
//   }
//   else if (input % 5, 3 !== 0) {
//     console.log(input);
//   }
  
// }

const output = fizzBuzz(false);
console.log(output);

let input = 2;
function fizzBuzz(input) { 
  if (typeof input !== "number")
  return NaN;

  if ((input % 3 === 0) && (input % 5 === 0))
  return 'FizzBuzz';

  if (input % 3 === 0)
  return 'Fizz';

  if (input % 5 === 0)
  return 'Buzz';

  return input;

}