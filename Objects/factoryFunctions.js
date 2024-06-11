// Camel Notation: oneTwoThreeFourFive
// Pascal Notation: OneTwoThreeFourFive


//Factory Function
function createCircle(radius) {
return {
  radius: radius, //so the code is not hardcoded
  
  draw() {
    console.log('draw');
  }

  
};
  
}

const  circle1 = createCircle(1);
console.log(circle1);

const  circle2 = createCircle(2);
console.log(circle2);