
//! Ternary Operators

//If a customer has more than 100 points 
//They are a 'gold' customer
//If they are below 100 points then they are 'silver'

let points = 110;
let type = points > 100 ? 'gold' : 'silver'; // if the points are greater than 100, they are 'gold', the : means otherwise (similar to a else statement) they are 'silver'

console.log(type); //gold

let points1 = 90;
let type1 = points1 > 100 ? 'gold' : 'silver'; 

console.log(type1); //silver

