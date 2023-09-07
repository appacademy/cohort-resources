// readline and require libraries are provided by node environment NOT by browser

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// .question(prompt, callback)



// callback function will wait until a response comes in (must press enter)
// rl.close() closes the prompt - only use when done asking for inputs
const response = rl.question('What do you think of JavaScript? ', answer => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    const truth = rl.question('What do you really think of JavaScript? ', truth => {
        console.log(`You said: ${truth}. Thank you for your honesty.`);
        rl.close();
    });
});

console.log("other stuff")



// How do we fix it?