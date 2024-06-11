const person = {
  name: 'Mosh', 
  age: 30
};
// to itterate over a properties of an object
for (let key in person)
  console.log(key, person[key]);

  const colors = ['red','green', 'blue'];

  for (let index in colors)
console.log(index, colors[index]);

//for-of loop 
// iterate over elements or items in an array
for (let color of colors)
console.log(color);