const circle = { 
  radius: 1, // radius property 
  draw() { // draw method
    console.log('draw');
  }
};

for (let key in circle) // items in the circle object
  console.log(key, circle[key]); //[] gets the values, shows what is inside the draw function

//! Object is not iterable so we cannot use for of loop
//?for (let key of circle) // error because for of loop can only be used with arrays and maps
//?console.log(key);   



for (let key of Object.keys(circle)) // Object is a constructor function which is called when a new object is created
console.log(key);


for (let entry of Object.entries(circle))//instead of returning keys as a string array it returns each value pair as an array
console.log(entry); // returns (2) ['radius', 1]
// (2) ['draw', ƒ]

//! Lets us see the values of properties in a object

if ('radius' in circle) console.log('yes'); //in operator means that if a given property exists in an given object

//! Simple say to inumirate a a prooperty in an object is for in loop

//! we can use the for of with the object.keys and . entries

//! to see if a proptery is used in a object we use the in operator

