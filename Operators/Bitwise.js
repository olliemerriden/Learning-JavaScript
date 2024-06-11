//! BITWISE OPERATORS (more theoretical)

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

console.log(1 | 2); //Bitwise OR (take the different 1s and puts them together to make 3)
console.log(1 & 2); //Bitwise AND (the 1s do not line up so it returns 0)

//real world example; user can Read, Write, Execute

//Use a bite of to determine permissions

// Read: 00000100 = 4
// Write: 00000010 = 2
// Execute: 00000001 = 1

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = 
(myPermission & readPermission) //this will be a true or false value (boolean)
 ? 'yes': 'no'; // if true returns yes, if false it returns no

 console.log(message);

 //BITWISE OR OPERATOR lets you add permissions
 //BITWISE AND OPERATOR we can check permissions 

