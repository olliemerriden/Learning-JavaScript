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
