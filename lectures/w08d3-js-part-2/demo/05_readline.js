// Very similar to #gets in Ruby

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Isn\'t JavaScript the best?', res => {
  rl.question(`You said: "${res}." Is that correct?`, anotherRes => {
    if (anotherRes === 'yes') {
      console.log('I knew you\'d feel that way!');
    } else if(anotherRes === 'no'){
      console.log('I don\'t believe you');
    } else {
      console.log("I don't understand that")
    }
    rl.close();
  })
});