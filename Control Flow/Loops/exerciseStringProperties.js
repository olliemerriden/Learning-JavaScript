const movie = {
 title: 'a', 
 releaseYear: 2011,
 rating: 8, 
 director: 'b'
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj )
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]);

}