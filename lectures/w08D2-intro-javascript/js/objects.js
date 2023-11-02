let hash2 = {
    func1: function doubler(array){
       return array.map(ele => ele * 2);
},

func2: function century(array){
    return array.map(ele => ele * 100);

}

}


// console.log(hash2.func2([1,2]))


// named function
// dummy();
// function dummy(){
//     console.log("im a dummy function")
// }




// functional expression
// const dummy = function(){
//     console.log("hi");
// }


// the variable is the means in which we access the function but the function name is anonymous
const something = function (){

}


// fat arrow function 
// has special binding properties 
const dummy3 = () => {
// logic
}

// if your function has 1 arg, you need no paren
const dummy4 = array =>{

}

// if your function has no args, then you DO need parens
 const dummy5 = ()=>{

 }

//  if you have more than 1 arg then you DO need parens

const dummy7 = (array1, array2) =>{

}


// if the the body of your function is one line, you can avoid writing the key word "return"
// do not write curlies is using this method
// if the curlies are in fact present, then you will have write the word return
    const dummy8 = array => `look at this array ${array}`


// constructor function
// we by convention capitilize constructor functions to denote that they are classes 
// 

// Es6
// class Car {

// }
// older style
// function Car(){

// }

// new Car();

function User(username,age,codingPref){
    // then I need to set up my instance variables 
    // these are like the @ (istance variables in Ruby)
    // except we use the key word "this"
    this.username = username;
    this.age = age;
    this.codingPref = codingPref;

}

// what about instance methods?

User.prototype.greet = function(){
   return `hi, my name is ${this.username}, my age is ${this.age} and I like coding in ${this.codingPref}`
}

User.prototype.say


let userOne = new User("diego", 31, "javaScript")

console.log(userOne.greet());
