// function Animal (name) {
//     this.name = name;
// };

// Animal.prototype.eat = function () {
//     console.log(this.name + ' is eating.');
// };

// Animal.prototype.setName = function(name){
//     this.name = name
// }

// function Cat(name) {
//     Animal.call(this, name)
// }




// // // Make Cat inherit from Animal here.
// // Cat.prototype = Animal.prototype // NOPE, because all Animals could meow
// // Cat.prototype = new Animal() // NOPE, because it would be expensive if Animal's constructor had a lot of logic

// function Surrogate(){}
// Surrogate.prototype = Animal.prototype;
// Cat.prototype = new Surrogate()
// Cat.prototype.constructor = Cat;


// Cat.prototype.meow = function () {
//     console.log('Meow!');
// };



// // function Surrogate(){}
// // Surrogate.prototype = Parent.prototype;
// // Child.prototype = new Surrogate()
// // Child.prototype.constructor = Child;




// // Cat.prototype = Object.create(Animal.prototype) // {walk: f(), eat: f()}
// // Cat.prototype.constructor = Cat;



// const garfield = new Cat('Garfield');
// // garfield.eat();
// // garfield.meow();

// const noCat = new Animal('noCat');
// // noCat.meow();

// garfield.meow();


// ES6

class Animal {
    constructor(name){
        this.name = name
    }

    eat(food){
        console.log(`${this.name} is eating the ${food}`)
    }
}

class Cat extends Animal {
    constructor(name, furColor){
        super(name)                     // Animal.call(this)
        // this.name = name'
        // Animal.call(this, name) //Nope: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.furColor = furColor
    }

    meow(){
        console.log(`${this.name} says meow!`)
    }
}

drogo = new Cat("drogo");
drogo.meow();
console.log(drogo)