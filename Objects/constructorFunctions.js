//Constructor Functions

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }

}

const circle = new Circle(1);

//!Factory Functions: Call a function and return a new object
//! Constructor Functions: We use the 'new' operator, instead of returning an object we use the 'this' keyword and we use the Pascal Notation