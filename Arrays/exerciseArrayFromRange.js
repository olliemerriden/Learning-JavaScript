
const numbers = arrayFromRange(-10,-4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) //! i starts at the first value, for as long as i is less than the second number it will increment 
    output.push(i); // add new item to array
  return output;
}

