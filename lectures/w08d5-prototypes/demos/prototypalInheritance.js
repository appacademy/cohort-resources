function Animal (name) {
    this.name = name;
};

Animal.prototype.eat = function () {
    console.log(this.name + ' is eating.');
};

function Cat(name) {
    this.name = name;
}

// // Make Cat inherit from Animal here.
// Cat.prototype = Animal.prototype // NOPE, because all Animals could meow
// // Cat.prototype = new Animal() // NOPE, because it would be expensive if Animal's constructor had a lot of logic

function Surrogate(){}
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate()
Cat.prototype.constructor = Cat;


// function Surrogate(){}
// Surrogate.prototype = Parent.prototype;
// Child.prototype = new Surrogate()
// Child.prototype.constructor = Child;

// Cat.prototype = Object.create(Animal.prototype) // {walk: f(), eat: f()}
// Cat.prototype.constructor = Cat;


Cat.prototype.meow = function () {
    console.log('Meow!');
};


const garfield = new Cat('Garfield');
// garfield.eat();
// garfield.meow();

const noCat = new Animal('noCat');
noCat.meow();


// ES6

// class Animal {
//     constructor(name){
//         this.name = name
//     }

//     eat(food){
//         console.log(`${this.name} is eating the ${food}`)
//     }
// }

// class Cat extends Animal {
//     constructor(name, furColor){
//         // super(name) // Animal.call(this)
//         this.name = name
//         this.furColor = furColor
//     }

//     meow(){
//         console.log(`${this.name} says meow!`)
//     }
// }

// drogo = new Cat("drogo", "tux");
// drogo.meow();