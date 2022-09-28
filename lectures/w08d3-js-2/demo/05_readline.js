// readline and require libraries are provided by node environment NOT by browser

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// .question(prompt, callback)


// What is wrong with the following code?

// const response = rl.question('What do you think of JavaScript? ', answer => answer);
// console.log(`Thank you for your valuable feedback: ${response}`);

// const truth = rl.question('What do you really think of JavaScript? ', answer => answer);
// console.log(`You said: ${truth}. Thank you for your honesty.`);
// rl.close();

rl.question('What do you think of JavaScript? ', response => {
    console.log(`Thank you for your valuable feedback: ${response}`);
    rl.question('What do you really think of JavaScript? ', truth => {
        console.log(`You said: ${truth}. Thank you for your honesty.`);
        rl.close();
    });
  });




// How do we fix it?