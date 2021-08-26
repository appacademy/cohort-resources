// readline and require libraries are provided by node environment NOT by browser

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// .question(prompt, callback)

reader.question("What do you think of Javascript?", response => {
    console.log(`Thank you for your feedback: ${response}`);
    reader.question("What do you reallyyyy think of Javascript?", truth => {
        console.log(`You said: ${truth}. Thanks for your honesty.`)
        reader.close();
    })
})






