
const numbers = [1, 2, 3];
const joined = numbers.join(','); // puts a , inbetween each value
console.log(joined); // returns 1,2,3

//! split method (not part of arrays)

const message = 'this is my first message';
const parts = message.split(' ');
console.log(parts); // returns ['this', 'is', 'my', 'first', 'message']

const combined = parts.join('-');
console.log(combined); // returns this-is-my-first-message

//! this technique is useful when making a url slug
// creates a - inbetween words in urls because they cannot include spaces




