
//Create a blockpost object with the properties:
// title
// body
// author 
// views (shows number of times this post has been viewed)
// comments (author, body)
// isLive


//? MY ATTEMPT

let blockPost = {
  title: 'Jeff the block',
  body: 'my name is jeff',
  author: 'Jeff',
  views: 8, 
  comments: ['Terry', 'My name is terry'],
  isLive: true,

};

//! ACTUAL ANSWER

let blockPost1 = {
  title: 'Jeff the block',
  body: 'my name is jeff',
  author: 'Jeff',
  views: 8, 
  comments: [
    {  author: 'Terry', body: 'my name is Terry'},
    {  author: 'Merry', body: 'my name is Merry'},
    {  author: 'Gerry', body: 'my name is Gerry'},
  ],

  isLive: true,

};

console.log(blockPost1);