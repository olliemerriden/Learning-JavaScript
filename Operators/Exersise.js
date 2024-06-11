//! Exercise 

let a1 = 'red';
let b1 = 'blue';

console.log(a1);
console.log(b1);

//swap so that a1 = blue and b1 = red

let newColorA1 = 'blue';
let currentColorA1 = newColorA1 || a1;

let newColorB1 = 'red';
let currentColorB1 = newColorB1 || b1;

console.log(currentColorA1);
console.log(currentColorB1);

// actual answer

let a = 'red';
let b = 'blue';

let c = a;//c and a are red
a = b; //a is now blue
b = c; // b is now red


console.log(a);
console.log(b);

