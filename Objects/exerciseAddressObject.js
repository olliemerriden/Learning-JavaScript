
// create an address object with three properties

// street, city, zipCode

// Create a Function called showAddress(address) that show all the properties in the object above

//? MY ATTEMPT

const address = {
  street: 'ladysmith',
  city: 'St Albans', 
  zipCode: 'AL3 5QA',

  
};
function showAddress(address){
    console.log(address)
  }

  showAddress(address);

//! ACTUAL ANSWER

  const address1 = {
    street: 'ladysmith',
    city: 'St Albans', 
    zipCode: 'AL3 5QA',
  
    
  };
  function showAddress(address1){
      for (let key in address1)
      console.log(key, address1[key]);
    }
   

    showAddress(address1);