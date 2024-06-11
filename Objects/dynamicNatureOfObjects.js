//We can alter properties or methods  
const circle = { //only the name color is const but can still change properties within a object
  radius: 1
};

circle.color = 'yellow'; // adding a property
circle.draw = function() {} // adding a method


delete circle.color; //deletes a property

console.log(circle);

