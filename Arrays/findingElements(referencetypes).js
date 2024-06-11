// Numbers, boolean values, and the null and undefined types are primitive. 
//Objects, arrays, and functions are reference types

const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];

console.log(courses.includes({ id: 1, name: 'a' })); // returns false because they are two different objects in two different locations in memory


// we call a function as a predicate and we use it to determine if the given element exists in an array
const finding = courses.find(function(element){
  return element.name === 'a';
})

console.log(finding);

const finding1 = courses.find(function(element){
  return element.name === 'xyz';
})

console.log(finding1); // returns undefined


const finding3 = courses.findIndex(function(element){
  return element.name === 'a';
})

console.log(finding3); // returns 0 because it the first element


// finds index
const finding2 = courses.findIndex(function(element){
  return element.name === 'zys';
})

console.log(finding2); // returns -1