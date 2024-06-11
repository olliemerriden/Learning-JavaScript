// Object-orientated Programming (OOP)
// A collection of objects that talk to each other to perform functionality
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true, 
  draw: function() {
    console.log('draw');
  }
};

// if a function is part of an object we call that function a method

circle.draw(); //Method

