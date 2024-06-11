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
