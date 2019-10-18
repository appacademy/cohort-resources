const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
    "Why do we bake cookies, and cook bacon?\n",
    "What is the true meaning of life?\n",
    "Will 'Make Change' be on A05?\n"
];

// We want our reader to reach each question, and get an answer before moving onto the next question

// This will not work
questions.forEach(question => {
    reader.question(question, (ans) => {
        console.log(ans);
    });
});

// MADNESS!
reader.question(questions[0], (ans) => {
    console.log(ans);
    reader.question(questions[1], (ans) => {
        console.log(ans);
        reader.question(questions[2], (ans) => {
            console.log(ans);
        });
    });
});