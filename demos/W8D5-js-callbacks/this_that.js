function Person(name) {
    this.name = name; 
    let banana = this; 
    // capture the context (what `this` refers to, before we lose it) with `that`
    setTimeout(function() {
        // `this` changes context when we're inside the inner function 

        // console.log(that); 
        // console.log(this); 
        // debugger; 
        banana.sayName(); 
    }, 2000); 
};

Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}`); 
}

let p = new Person('Sally'); 


