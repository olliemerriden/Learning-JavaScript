//! Value Types (primitives):
// Number, String Boolean, Symbol, undefined, null


//! Reference Types:
// Objects, Functions, Arrays


//! Primitives are copied by value
//! Objects are copied by their reference 


let x = 10;
let y = x;

x = 20;

//x and y are two independent variables

// if returned x = 20 and y = 10 because y = x was not specified after the x value change

let xx = { value : 10 }; //object with property of 10
let yy = xx;

xx.value = 20;

// When we use an object the value isnt stored in a variable it is stored in memory
// the address of the memory location is stored inside the variable  

//! So when we copy x into y its the address or the reference that is copied 

// Both x and y are pointing to the same object in memory 

// when we modify that object the changes are visible to the other variable

let number = 10;

function increase(number) {
    number++;
 }

 increase(number);
 console.log(number); // returns only 10 because the number variable is completley independant from from the number++ 


 let obj = {value: 10};

function increase(obj) {
    obj.value++;
 }

 increase(obj);
 console.log(obj); //returns 11 because the object is passed by its reference 
 // we have two variables pointing to the same object so they are connected 


 