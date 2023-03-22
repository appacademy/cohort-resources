// readline and require libraries are provided by node environment NOT by browser

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question(prompt, callback)


// What is wrong with the following code?

// const response = rl.question('What do you think of JavaScript? ', answer => console.log(answer));
// console.log(`Thank you for your valuable feedback: ${answer}`);

// const truth = rl.question('What do you really think of JavaScript? ', answer => answer);
// console.log(`You said: ${truth}. Thank you for your honesty.`);
// rl.close();

// What is wrong is that we are not waiting fot the user input, we are returning it as we prompt it. Therefore, it is undefined

// How do we fix it?


rl.question('What do you think of JavaScript? ', response => {
    console.log(`Thank you for your valuable feedback: ${response}`);
    rl.question('What do you really think of JavaScript? ', answer => {
        console.log(`You said: ${answer}. Thank you for your honesty.`);
        rl.close();
    })
})
