// function greet() { //body of the function (e.g. display a message to console)
//   console.log('Hello World')
  
//   }

let a = 1;
let b = 2;

function maxNum() {
  // console.log(maxNum(a, b));
 

  if (a > b) {
    console.log("The greater number is a") ;
  }
  else{
    console.log ("The greater number is b")
  }


}

maxNum();

//! CORRECT WAY

let number = max(5, 10);
console.log(number);

function max (a, b) {
  return (a > b) ? a : b;
}
