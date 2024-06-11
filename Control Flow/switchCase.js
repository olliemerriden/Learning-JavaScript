//depending on role see if user is a guest or a moderator or a admin

let role = 'guest';

switch (role) {
  case 'guest':     
  console.log('Guest User');
  break;

  case 'moderator':     
  console.log('Moderator User');
  break;

  default:
    console.log('Unknown Role');

}

//compare the value of a variable against a bunch of other values and cases

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User')