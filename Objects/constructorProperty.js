// References the function that was used to construct or create the object



function createCircle(radius) {
  return {
    radius, //so the code is not hardcoded
    
    draw: function () {
      console.log('draw');
    }
  
    
  };
    
  }

  
  
  const  circle = createCircle(1);
  
  function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
      console.log('draw');
    }
  
  }
  
  const another = new Circle(1);

  // another.constructor returns 
  //ƒ Circle(radius) {
  //  this.radius = radius;
  //  this.draw = function() {
  //    console.log('draw');
  //  }

  new String(); //"", '', ` (these are refferred to a literals)

  //every object has a constructor property which references the function that was used to create that object
