// I.APPLY


// function greet(msg){
//     console.log(`${msg}: ${this.name}`)
// }

// greet("Hello")

// const obj = {
//     name: "Lola"
// }

// greet.apply(obj, ['Hello'])

// give the context obj to the greet function
// gives the arguments saved in an array to that greet function
// invokes the greet function


// II.CALL


// function greet(msg1, msg2){
//     console.log(`${msg1}: ${this.name}`)
//     console.log(`${msg2}: ${this.name}`)
// }

// // greet("Hello")

// const obj = {
//     name: "Lola"
// }

// greet.call(obj, 'Hello', 'Bye')

// gives the context obj to the greet function
// gives the arguments comma separated to that greet function
// invokes the greet function


// III.BIND

const obj = {
    name: "Lola"
}

function greet(msg1, msg2){
    console.log(`${msg1}: ${this.name}`)
    console.log(`${msg2}: ${this.name}`)
}

greet.bind(obj)("Hello", "Goodbye")
greet.bind(obj, "Hello", "Goodbye")()
greet.bind(obj, "Hello")("Goodbye")
// const greet = greet.bind(obj)
// greet("Hello", "Goodbye")
// bind takes the new context as a first argument
// other arguments are comma separated
// invoked once => sets the context to the greet function without invoking it
// invoke twice => invokes the greet function