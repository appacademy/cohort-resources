class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log('nom nom nom'); 
    }
}

class Dog extends Animal {
    constructor(name, toy) {
        super(name); 
        // this.name = name; 
        this.favoriteToy = toy; 
    }

    bark() {
        console.log('woof!'); 
    }

    sayName() {
        console.log(`My name is ${this.name}`); 
    }
}