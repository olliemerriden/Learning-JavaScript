//! NON BOOLEAN logical operators

false || true; ; // returns true
false || 'Mosh'; //returns 'Mosh'
false || 1; //returns '1'

//result of a logical expression is not always a true or false depending on the values we have

//Falsy (not a boolean false): 
// undefined, null, 0, false, '', Nan (not a valid number)

//Anything that is not Falsy ---> Truthy
false || 'Mosh'; // Mosh is not a Falsy value so it returns 'Mosh'


false || 1 || 2 // returns
// both 1 and 2 and Truthy however when js finds a Truthy value it stops and returns it before reading the 2
// (Short Circuiting)


//Pick Color of a t-shirt user wants to buy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; //this means that if we have a userColor then we use it but if not we use defaultColor

//both values are Truthy values so we select the userColor if it is avaliable first

console.log(currentColor);



let userColor1 = undefined;
let defaultColor1 = 'blue';
let currentColor1 = userColor1 || defaultColor1;

console.log(currentColor1); //blue, because the first Truthy value is defaultColor

