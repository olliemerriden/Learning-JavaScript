//! TWO TYPES OF CONDITIONAL STATEMENTS: IF ...ELSE, SWITCH ...CASE

//! IF ...ELSE

//get current hour
//IF hour is between 6am and 12pm: Good Morning!
//IF hour is between 12pm and 6pm: Good Afternoon!
//Otherwise; Good evening!

let hour = 10;
if (hour >= 6 && hour < 12) {

  console.log('Good Morning!');

}
else if (hour >= 12 && hour < 18) {

  console.log('Good Afternoon!');

}
else {
  console.log('Good Evening!');
}
