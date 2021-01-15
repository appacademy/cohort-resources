// I. FUNCTION STYLE

// 1.ES5

// function pirateYell(arg){
//     console.log(`${arg} matey!`)
// }

// pirateYell("Zack")


// 2.ES6 

// const pirateYell = (arg) => {
//     // console.log(this)
//     console.log(`${arg} matey!`)
// }

// pirateYell("Zack")


// II.METHOD STYLE

// 1.ES5

// const pirate = {
//     name: "Ryan",
//     numTats: 9,
//     yell: function(arg){
//         console.log(this)
//         console.log(`${arg} matey!`)
//     }
// }

// pirate.yell("Zack")


// III.CONSTRUCTOR STYLE


// function Pirate(name, numTats){
//     this.name = name;
//     this.numTats = numTats;
// }

// Pirate.prototype.yell = function (arg){
//     console.log(`${arg} matey!`)
// }

// Pirate.revolt = function(){
//     console.log("I am revolting!")
// }

// const ryan = new Pirate("Ryan", 9)
// // console.log(ryan)
// ryan.yell("Zack");
// Pirate.revolt();