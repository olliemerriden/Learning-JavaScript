
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));


function includes(array, SearchElement) {
  for (let element of array) //
    if (element === SearchElement)
      return true;
  return false;
}

