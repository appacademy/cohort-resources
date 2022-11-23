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

// What is wrong is that we are not waiting fot the user input, we are returning it as we prompt it. Therefore, it is undefined

// How do we fix it?

rl.question('What do you think of JavaScript? ', answer => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question('What do you REALLY think of JavaScript? ', response => {
        console.log(`You said: ${response}. Thank you for your honesty.`);
        rl.close();
    });
    // rl.close(); // Here it would colse after the first user input
});

rl.close(); // Here it would close before user input 


