//! functions are OBJECTS

function Circle(radius) {
  this.radius = radius; //refers to an object that is executing the current piece of code.
  this.draw = function() {
    console.log('draw');
  }
}

Circle.call({}, 1); // calls a function, {} is an empty object and specifcys the argument
Circle.apply({} [1,2,3,4]); // same but passed in an array, useful if you want to pass the array as the second arugement





const another = new Circle(1);