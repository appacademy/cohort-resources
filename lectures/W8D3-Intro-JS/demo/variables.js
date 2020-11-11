// console.log('hello world');

// const
// can only be declared/initialized once
// cannot be reassigned

// const is block scoped
function howToConst() {
    const fruit = 'banana';

    if (true) {
        const fruit = 'orange';
        console.log(fruit);
    }

    console.log(fruit);
}


// let
// can only be declared/initialized once
// can be reassigned

// let user; // a declaration, value is set to undefined by default
// console.log(user);
// user = 'Mikle';
// console.log(user);

// let is also block scoped

function howToLet() {
    // let user = 'Walker';
    
    if (true) {
        user = 'Walker';
        console.log(user);
        let user;
    }
    
    console.log(user);
}


// var

// function scoped

function howToVar() {
    var doggy = 'Fido';

    if (true) {
        var doggy = 'Spot';
        console.log(doggy);
    }

    console.log(doggy);
}

// global
// dont use em

globalVariable = 'Im global';

function tester() {
    globalVariable = 'howdy';
}

// tester();
// console.log(globalVariable);

