
//Speed limit = 70
//For every 5 mph above speed limit = 1 point


// Math.floor(1.3)


// More than 12 points = suspended

//!MY GO

// let points = 1;
// checkSpeed(78);



// function checkSpeed(speed) {

//   if (speed <= 70) {
//     return console.log('Ok');}

//     else if (speed >= 75 && speed <80) {
//       return console.log('1 Point');
//       points++;
//     }
//     else if (speed >= 80 && speed <85) {
//       return console.log('2 Point');
//       points+2;
//     }

  

  

//   else if (points >= 12) {
//     return console.log('License Suspended');}


// }

//!ACTUAL
checkSpeed(76);

function checkSpeed(speed) {
const speedLimit = 70;
const kmPerPoint = 5



  if (speed < speedLimit + kmPerPoint) {
  console.log('Ok');
  return;
}

  
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12)
  console.log('License Suspended');
  else {
    console.log('Points', points);
  }
}
    

