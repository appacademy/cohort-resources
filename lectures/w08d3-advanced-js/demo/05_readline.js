// readline is for the node environment only

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of JavaScript?', res => {
  rl.question(`You said ${res}. Is that correct?`, anotherRes => {
    if (anotherRes === 'yes') {
      console.log('If you say so...')
    } else if (anotherRes === 'no') {
      console.log('I knew it!');
    } else {
      console.log('I didn\'t understand that')
    }
    rl.close();
  })
});