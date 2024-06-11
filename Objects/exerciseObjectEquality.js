


let address1 = new Address('e', 'f', 'g');
let address2 = new Address('e', 'f', 'g');

//Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city =  city;
  this.zipCode = zipCode;
}

//USe the constructor function to create two address objects
// Create two fucntions:

// areEqual that passes through address1 and address2 and checks to see if they are the same
// return true or false

function areEqual(address1, address2) {
  return address1.street === address2.street && 
  address1.city === address2.city && 
  address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2)); // returns true because all of the properties of each object are the same

// areSame passes through address1 and address2 and checks if they are pointing to the same object
// return true or false

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2)); // returns false because they ar two different objects
