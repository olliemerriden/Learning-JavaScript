
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // concat combines two arrays

console.log(combined); // returns 1,2,3,4,5,6

const slice = combined.slice(2, 4); // cut everything before index 2 and after index 4

console.log(slice);  // returns 3, 4

//! if you are dealing with primitive values then they will copy over 

//! if you are dealing with objects then only the references are copied across (SHOWN BELOW)

const first1 = [{ id: 1 }];
const second1 = [4, 5, 6];

const combined1 = first1.concat(second1);
first1[0].id = 10;

console.log(combined1); // returns (id: 10 , 4,5,6)