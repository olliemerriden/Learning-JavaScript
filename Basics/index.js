//!Variables

let name1 = 'Mosh';
console.log(name);

//variable cannot be a reserved key word e.g. 'let'
//should be meaningful
//cannot start with a number (1name)
//not space or hyphen (-)
//case sensitive

let firstName ='Josh';
let lastName ='Park'
console.log(firstName, lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//!Constants

//const means that the value of the variable cannot change

//?const interestRate2 = 0.3;
interestRate2 = 1; //even though i changed it because it is a constant it cannot change the value
console.log(interestRate2);

//!Primitive Types

// two category of types: primitives/ value types, reference types


// primitives/ value types
let name2 = 'Mosh' //string literal (fancy name for string)
let age = '30'//number literal
let isApproved = true //Boolean literal: use where you need a true and false outcome
let firstName1 = undefined;
let selectedColor = null; //clear the value of the variable

//!Dynamic Typing

//looked at the typeof variable in the chrome console
//type of a variable can change
let name3 = 'Mosh' 
let age1 = '30'
let isApproved1 = true 
let firstName2 = undefined;
let selectedColor1 = null; 

//!REFERENCE TYPES

//!Objects 

//puts it within an object to make it easier (like a div)
let person = {
  name4: 'Mosh',
  age2: 30

};

//Dot notation (use this one)
person.name4 = 'John';

//Bracket notation
//?let selection = 'name4';
//?person[selection] = 'Mary';


console.log(person.name4);

//!Arrays

//square brackets mean whats in the array
let selectedColor2 = ['red', 'blue'];//each value has a index starting at 0
selectedColor2 [2] = '1'; //insert value for the index 2
console.log(selectedColor2); //console.log(selectedColor2[0]); to retrieve specific values within array

console.log(selectedColor2.length); //length is the number of items in the array

//!Functions

//sets a statements that performs a task or calculates and returns a value

function greet() { //body of the function (e.g. display a message to console)
console.log('Hello World')

}

greet();

function greet1(name, lastName1) { //()the peramiter the variable within the function only
  console.log('Hello ' + name + ' ' + lastName1) //name is peramiter
  
  }
  
  greet1('John', 'Smith'); //john is a value for the peramiter


  //!Types of Functions

  console.log('Hello World') // this is a function
  
  //Performing a task
  greet();

function greet1(name, lastName1) { //()the peramiter the variable within the function only
  console.log('Hello ' + name + ' ' + lastName1) //name is peramiter
  
  }
  greet1('John', 'Smith'); //john is a value for the peramiter



  //Calculate a value
  function square(number) {
    return number * number;
  }

  //?let number = square(2); // if you want to declare value
  console.log(square(2));


