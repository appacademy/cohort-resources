function Animal(name) {
    this.name = name;
};

Animal.prototype.eat = function () {
    console.log(this.name + ' is eating.');
};

function Cat(name) {
    // this.name = name;
    Animal.call(this, name) // call superclass' constructor, bound to the new cat object
}






// Make Cat inherit from Animal here.

/* --------------------------
Inheritance implementation 1
    - One flawed implementation of inheritance: set the class prototype equal to superclass' prototype
    - whenever we edit the Cat prototype, we also mutate the Animal prototype b/c they are the same object (not what we want) 
*/

// Cat.prototype = Animal.prototype; 


/* --------------------------
Inheritance implementation 2
    - Slightly better but not very performant way:
    - We want to set the Cat prototype's __proto__ to point to the Animal prototype 
    - To do this, take advantage of the fact that constructor-style invocation (using the `new` keyword) creates an object whose __proto__ points to the Constructor's prototype
    - Disadvantages to this approach:
        - Runs Animal constructor when we set the Cat's prototype
        - Animal's constructor may have lots of code that can be expensive (or at least wasteful) to run just to set a subclass' prototype
*/

// Cat.prototype = new Animal(); // Cat prototype's __proto__ points to Animal prototype


/* --------------------------
Inheritance implementation 3
    - Acceptable way to inherit (learn this pattern)
    - Improves on the previous pattern b/c Surrogate is an empty constructor function,
    - hence the cost of running it to define another class' prototype is minimal
*/

function Surrogate() { };
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate(); // Cat prototype's __proto__ points to Animal prototype
Cat.prototype.constructor = Cat; // signals that the newly created Cat instance is a Cat and not an Animal


/* --------------------------
Inheritance implementation 4
*/

// Cat.prototype = Object.create(Animal.prototype);






Cat.prototype.meow = function () {
    console.log("meow");
};

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();

const noCat = new Animal('noCat');
// noCat.meow();






/* ----- ES6 Class syntax ----- */

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(this.name + ' is eating.');
//     }
// }

// class Cat extends Animal {
//     constructor(name, coatColor) {
//         super(name); // equivalent of Animal.call(this) in ES5
//         this.coatColor = coatColor;
//     }

//     meow() {
//         console.log('Meow!');
//     }
// }