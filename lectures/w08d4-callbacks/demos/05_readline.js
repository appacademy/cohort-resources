// readline and require libraries are provided by node environment NOT by the 
// browser

// Note: we'll only use this library today so we can practice asynchronous 
// functions before using JS with the internet. It's a little finicky and 
// you have to run in node, not chrome. 
// - Run `node <filename>` instead of opening up node and `require`ing the file.
// - Doing so in the browser will cause readline to be buggy and duplicate letters.

// Syntax for setting up reader: don't need to memorize, just copy from notes.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline gives us an asynchronous question method that takes a prompt and 
// a callback:  .question(prompt, callback)

// What is wrong with the following code?

// const response = rl.question('What do you think of JavaScript? ', answer => answer);
// console.log(`Thank you for your valuable feedback: ${response}`);

// const truth = rl.question('What do you really think of JavaScript? ', answer => answer);
// console.log(`You said: ${truth}. Thank you for your honesty.`);
// rl.close();

// How do we fix it?

rl.question("What do you think of JavaScript? ", response => {
    console.log(`Thank you for your valuable feedback: ${response}`);
    rl.question("What do you really think of JavaScript? ", truth => {
        console.log(`You said ${truth}. Thank you for your honesty.`)
        rl.close()
    })
})