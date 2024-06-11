
const courses = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
];



// read this as course => course.name = 'a'

const course = courses.find((course) => course.name === 'a');



console.log(course);