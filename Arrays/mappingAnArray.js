//! can map each element in a array to something else

//! BOTH the filter and the map method return a new array they dont modify the original array


//! STRINGS

const numbers = [1, -1, 2, 3]; 

const filtered = numbers.filter(n => n >= 0);// gets all positive numbers and stores them in 'filtered'

const items = filtered.map(n => '<li>' + n + '</li>');
// allows us to put <li> and </li> before and after number

console.log(items); // returns ['<li>1</li>', '<li>2</li>', '<li>3</li>']

const html = items.join(''); // joins all the items inside the array (the '' removes the comma for empty space)

console.log(html); // returns <li>1</li>,<li>2</li>,<li>3</li>

const html1 = '<ul>' +  items.join('') + '</ul>'; // adds the ul markup for html

console.log(html1); // returns <ul><li>1</li><li>2</li><li>3</li></ul>

//! OBJECTS

const numbers1 = [1, -1, 2, 3]; 

const filtered1 = numbers1.filter(n => n >= 0);

const items1 = filtered1.map(n =>  ({ value: n}) );


console.log(items1); // returns 0: {value: 1}1: {value: 2} 2: {value: 3} length : 3

//! CHAINING 

// call one after another in a chain

// no need to store everything in a constant as it is not being called again outside of this situation

const numbers2 = [1, -1, 2, 3]; 

const items2 = numbers2
  .filter(n => n >= 0)
  .map(n =>  ({ value: n}) );
  // can add more maps and filters here

console.log(items2);





