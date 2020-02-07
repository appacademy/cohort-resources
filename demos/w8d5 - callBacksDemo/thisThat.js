function Person(name) {
    this.name = name;
    let banana = this;

    // setTimeout is a function on the window
    setTimeout(function() { 
      banana.sayName();  
    }, 1000);
}

Person.prototype.sayName = function() {
    console.log(`${this.name}`);
}

// const mats = new Person('mats');