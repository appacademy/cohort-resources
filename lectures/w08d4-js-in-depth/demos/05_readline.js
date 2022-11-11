// readline and require libraries are provided by node environment NOT by browser

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// the format is:
// rl.question(prompt, callback)


// What is wrong with the following code?

// let ans = rl.question('What do you think of JavaScript? ', answer => answer);
// console.log(`Thank you for your valuable feedback: ${ans}`);
    
// let res = rl.question('What do you really think of JavaScript? ', truth => truth)
// console.log(`You said: ${res}. Thank you for your honesty.`);



// How do we fix it?

rl.question("What do you think of JavaScript? ", response => {
    console.log(`Thank you for your valuable feedback: ${response}`);
    rl.question("What do you really think of JavaScript? ", truth => {
        console.log(`You said ${truth}. Thank you for your honesty.`)
        rl.close()
    })
})