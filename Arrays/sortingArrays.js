
const numbers = [2, 3, 1];



//! USE WHEN YOU HAVE NUMBERS AND STRINGS IN ARRAY
numbers.sort(); // converts each element into a string and then sorts them 
console.log(numbers); // returns 1,2,3



numbers.reverse();
console.log(numbers); // returns 3,2,1






const courses = [
  { id: 1, name: 'Node.js'},
  { id: 2, name: 'JavaScript'},
];


courses.sort(function(a, b) { // this helps priortise the name alphabetical order
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courses); // returns JavaScript first 


// CAPITAL LETTERS MATTER because of ASCII table

