//!Functions

//sets a statements that performs a task or calculates and returns a value

function greet() { //body of the function (e.g. display a message to console)
  console.log('Hello World')
  
  }
  
  greet();

  function greet1(name, lastName1) { //()the peramiter the variable within the function only
    console.log('Hello ' + name + ' ' + lastName1) //name is peramiter
    
    }
    
    greet1('John', 'Smith'); //john is a value for the peramiter
  
  
    //!Types of Functions
  
    console.log('Hello World') // this is a function
    
    //Performing a task
    greet();
  
  function greet1(name, lastName1) { //()the peramiter the variable within the function only
    console.log('Hello ' + name + ' ' + lastName1) //name is peramiter
    
    }
    greet1('John', 'Smith'); //john is a value for the peramiter
  
  
  
    //Calculate a value
    function square(number) {
      return number * number;
    }
  
    //?let number = square(2); // if you want to declare value
    console.log(square(2));
  
  
  