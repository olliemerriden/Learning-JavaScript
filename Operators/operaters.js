console.log('Hello World');

//! TYPES OF OPERATORS
//Arithmetic
//Assignment
//Comparison
//Logical
//Bitwise

//! Arithmetic 

//for calculations

let x = 10;
let y = 3;

console.log(x + y); // x + y is a expression (produces a value)
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //remainder of division
console.log(x ** y); // (x ^ y)

//Increment (++)
console.log(++x) //before the value = means it is added before the console
console.log(x++) //after means that it is added after you put another x in an expression :
console.log(x) // now it adds 1 on 11 = 12

//Decrement (--)
console.log(--x) //before the value = means it is - before the console
console.log(x--) //after means that it is - after you put another x in an expression :
console.log(x) // now it minus 1 on 11 = 10


//! Assignment

//assign a value to a variable

//put the:  variable (e.g. +, -, *, /)= number

let a = 10;

a = a + 5;
a += 5; // this is the better way of writing the line above


a = a * 3;
a *= 3;



//! Comparison

//compare the value of a variable

let b = 1;


//relational operators

console.log(b>0); //= true

//result of a comparison operator is a boolean (true or false)

console.log(b>=0); //true
console.log(b<0); //false
console.log(b<=0); //false

//equality operators
console.log(b === 1); // b is 1 
console.log(b !== 1); // b is not equal to 1


//! Equality Operators

//strict equality (Type + Value)
console.log(1 === 1);
// both 1 and and 1 are both numbers
console.log('1' === 1);
//types do not match so we get a false value


//lose equality
console.log(1 == 1);
//lose equality looks at left side and converts the right side to the same

console.log('1' == 1);
//for this example the '1' is a string so the right side 1 is now a string

console.log(true == 1);
//converts the right side value to true

//?Takeaways:
//Strict Equality: Same type and values 
//Lose; Equality: Coverts the right side to the same value as the left side

//Use Strict Equality for pressision and accuracy

//! Ternary Operators

//If a customer has more than 100 points 
//They are a 'gold' customer
//If they are below 100 points then they are 'silver'

let points = 110;
let type = points > 100 ? 'gold' : 'silver'; // if the points are greater than 100, they are 'gold', the : means otherwise (similar to a else statement) they are 'silver'

console.log(type); //gold

let points1 = 90;
let type1 = points1 > 100 ? 'gold' : 'silver'; 

console.log(type1); //silver


//! Logical Operators

// use operators to make decision based on multiple conditions

//?Logical and (&&)
//true is both operands are true

console.log(true && true); //true
console.log(false && true); //false

//app for approving loans based on if they have a high income and good credit score


let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);


//?Logical or (||)
// Returns true is only one is true

let highIncome1 = false;
let goodCreditScore1 = true;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log(eligibleForLoan1); //true


//?Logical not (!)

let highIncome2 = false;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;
console.log('Eligible', eligibleForLoan2); //Eligible False

let applicationRefused = !eligibleForLoan2 //always use ! when it is the opposite

console.log('Application Refused', applicationRefused) //Application Refused True

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


//! BITWISE OPERATORS (more theoretical)

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

console.log(1 | 2); //Bitwise OR (take the different 1s and puts them together to make 3)
console.log(1 & 2); //Bitwise AND (the 1s do not line up so it returns 0)

//real world example; user can Read, Write, Execute

//Use a bite of to determine permissions

// Read: 00000100 = 4
// Write: 00000010 = 2
// Execute: 00000001 = 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = 
(myPermission & readPermission) //this will be a true or false value (boolean)
 ? 'yes': 'no'; // if true returns yes, if false it returns no

 console.log(message);

 //BITWISE OR OPERATOR lets you add permissions
 //BITWISE AND OPERATOR we can check permissions 


 //! Operator Precedence

 let x1 = 2 + 3 * 4 // = 14
 console.log(x1);

 //USE BIDMAS to figure out which operator has priority 

 //USE () to give priority to expressions 
 
 let x2 = (2 + 3) * 4 // = 20
 console.log(x2);

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

 let a2 = 'red';
 let b2 = 'blue';

 let c2 = a2;
 a2 = b2;
 b2 = c2;

 console.log(a2);
 console.log(b2);



