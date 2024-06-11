const circle = { 
  radius: 1, // radius property 
  draw() { // draw method
    console.log('draw');
  }
};

// create a object that clones the object above

//! this method is old

const another = {

};

// use for in loop to copy across
for (let key in circle)
another[key] = circle[key]; // copies all the keys across 

console.log(another); //returns {radius: 1, draw: ƒ}

  //! better way ish

  const another1 = Object.assign({}, circle); // takes all the properties from circle and copies them to 'another' using an empty object

  console.log(another1);


  const another2 = Object.assign({ 
    color: 'yellow' // instead of empty object can include some properties you want to add as well as circle properties
  }, circle); 

  console.log(another2); 

  //! simplest way

  const another3 = { ...circle} // ... (spread operator) takes all the properties in the circle object and puts them in the curly braces

  console.log(another3);

//! OBJECT.ASSIGN copies the properties and methods to clone an object or combine multiple object in one

//! SPREAD OPERATOR is used to copy directly only one object
