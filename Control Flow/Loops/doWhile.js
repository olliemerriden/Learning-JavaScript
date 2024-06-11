// for loop example
// for (let i = 1; i <= 5; i++) { 
//   if (i % 2 !== 0) console.log(i); 
//   }

//while loop example
// let i = 0;
// while (i <= 5) { //this condition is evaluated before the statements are executed
//  if (i % 2 !== 0) console.log(i); 
//  i++;
// }

//do while loop
//always executed at least once even if the outcome is false

let i = 9;
do {
  if (i % 2 !== 0) console.log(i); 
  i++;
} while (i <= 5); // all statements are executed at least once then the condition is evaluated

//returns 9 even though the condition if false
//this is because in the statements there is a console.log(i)