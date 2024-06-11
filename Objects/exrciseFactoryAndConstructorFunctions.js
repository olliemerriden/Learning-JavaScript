//Create a new address object using these using constructor and factory functions
let address = {
  street: 'ladysmith',
  city: 'St Albans', 
  zipCode: 'AL3 5QA',
};
 
//? My ATTEMPT

// Constructor function (don't work)
function ShowAddress(address) {
  this.address = address;
}

const adresses = new ShowAddress(address);


//Factory Function (semi-works)

function showAddress(address) {
  return {
    address: address,
  }
}

const trust = showAddress(address);
console.log(trust);


//! Actual ANSWER (I MISREAD THE QUESTION)

//Factory Function (simply return a new object)

function createAddress(street, city, zipCode) {
  return{
    street: street, // can just be street if the key and value are the same
    city:  city,
    zipCode: zipCode,
};
}

let address1 = createAddress('a', 'b', 'c')

console.log(address1);

//Constructor Function (USE PASCAL NOTATION)

// 'this' keyword is used to intitalised this new object

function Adress(street, city, zipCode) {
    this.street = street;
    this.city =  city;
    this.zipCode = zipCode;
}

let address2 = new Adress('e', 'f', 'g')

console.log(address2);


