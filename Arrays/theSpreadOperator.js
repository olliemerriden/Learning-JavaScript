
const first = [1 , 2, 3];
const second = [4 , 5, 6];



// const combined = first.concat(second); 

//! using spread operator to combine arrays

const combined = [...first, ...second];
// returns 1,2,3,4,5,6


const combined1 = [...first, 'a' , ...second, 'b'];
// returns 1,2,3,a,4,5,6,b

//! USING SPREAD OPERATOR allows us much more flexibility




// const copy = combined.slice();

//! Putting the contents of a combined array into a new array

const copy = [...combined1]

