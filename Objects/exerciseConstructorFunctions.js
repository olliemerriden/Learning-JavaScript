
let post = {
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

function PostBack(title, body, author) { // don't use views because we want to start at 0 and auto increment
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;

  this.comments = [];

  this.isLive = false;

}

let blockPost = new PostBack('Jeff hte book', 'Myname Jeff', 'Jeff');

console.log(blockPost);