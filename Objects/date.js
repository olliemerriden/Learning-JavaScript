
// creating a data object

const now = new Date(); // returns date now 
const date1 = new Date('May 11 2018 9:00'); // Other date and time formats are on Mozilla.org
const date2 = new Date(2018, 4, 11, 9, 0 ); // 4 represnts may because months start at 0
// 11 is the day of the month
// 9 is 9am 
// 0 is minutes for time


// data objects have a bunch of get and set methods 

// now.get is a get method 

now.getDate;
now.getHours;
now.getFullYear;

// these are only a select few

now.setFullYear(2017); // changes year to 2017

// now.toDateString() in console returns 'Wed May 24 2017' (because we changed the year)

// now.toTimeString() in console returns '22:14:57 GMT+0100 (British Summer Time)' (showing current time)

// now.toISOString() in console returns '2017-05-24T21:16:09.364Z' (returns time first then after the 'T' it returns the time)
// this is ISO format used for web or mobile app that deals with backend to transfer date and time between client and server


