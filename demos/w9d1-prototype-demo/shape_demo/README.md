# W9D1 Lecture - Prototypes

* All of these demos will be performed in the dev tools

## Constructor Code Demo

* Let's try to write our own constructor function (similar to what we would know as a class in Ruby)
* Create a file called `shape.js` and add the following code:

```JS
  function Shape(color) {
    this.color = color;
  }

  const blueShape = new Shape("blue");
  console.log(blueShape)
```

* Demo that it works by doing the following
  * Create an `index.html` file with a script tag for `shape.js`
  * Open the file in console and see if the `blueShape` object is logged
* First show the prototype, `__proto__`, and color for `Shape` and `blueShape`
  * Should be able to clarify questions students had from the lecture slide

```JS
Shape.prototype.sayHello = function () {
  console.log(`Hello, I am ${this.color}`);
}
```

* Show how prototype and `__proto__` changed
* Show how calling it on the class, i.e. `Shape.prototype.sayHello()`
  makes color undefined
  * Go straight into writing this out as a diagram (that's what the next
    slide will tell you to do)

## Prototypal Inheritance Code Demo

## Surrogate Demo

* Okay, so now say we want to create some specific shape classes like `Rectangle` that will have its own specific properties/functions, but still have all the properties of `Shape`. How can we do this?
* First, let's build a Rectangle constructor function
  * Add the following code to `rectangle.js`

```JS
function Rectangle(color, width, height) {
  // Shape.call(this, color)
  this.color = color; // Then refactor
  this.width = width;
  this.height = height;
}
const yellowRectangle = new Rectangle("yellow", 6, 3);
console.log(yellowRectangle);
```

* Add a script tag to `index.html` to include `rectangle.js` - see that you have access to both `yellowRectangle` and `blueShape` and that both `Rectangle` and `Shape` have separate prototypes. However, as it stands we are not able to call `sayHello` on our rectangle instance as there is no relationship setup between these two classes.
* Okay, but now we have to figure out how to get `Rectangle` to effectively be a sub-class of `Shape` - how can we do this? (Remember, we CANNOT modify the `__proto__` property directly).
  * Well, remember that whenever you create a new object, it's `__proto__` property get's set to whatever the `prototype` property is of the constructor function it was built from.
  * With that in mind, we could build our child classes prototype object from the parent class constructor function, and set up the inheritance hierarchy we need! This will set the prototype's `__proto__` property to the parent class's prototype.
  * But, this isn't ideal - suppose the parent class's constructor function is complicated and potentially costly. Maybe it will error out if we don't provide certain arguments. While this will properly set up inheritance our child class's prototype object will be unnecessarily bloated at best, and cause undesired functionality at worst.
  * Instead we can build a constructor function that sits in the middle - a `Surrogate` constructor, whose `prototype` property will point to the same object the parent class's `prototype` property points to BUT the `Surrogate` constructor function will be empty. Therefore, when we build the child class's prototype from the `Surrogate` constructor, we will get the desired inheritance hierarchy we want without potentially unwanted side effects.

## Diagram #2 - Surrogate diagram

![diagram2](https://github.com/appacademy/sf-lecture-notes/blob/master/javascript/w6d1-prototypes/assets/diagram_2.JPG)

* Add the following code to `surrogate_inherits.js`:

```JS
function inherits(ParentClass, ChildClass) {
  function Surrogate() {}
  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();
  ChildClass.prototype.constructor = ChildClass;
}
```

* Add the following to `rectangle.js` (make sure it's above where you build `yellowRectangle`):

```JS
inherits(Shape, Rectangle);
```

* You might ask, why do we not just use an instance of Shape?
  * Because there could be undesired side effects in the constructor function.
* Why do we not assign `__proto__`?
  * It is inefficient and an anti-pattern
* Create an instance to show that it works


* Create a new method _only_ intended for the Rectangle constructor function (add to `rectangle.js`)
* Make sure to add this code after you call `inherits` since `inherits` will override `Rectangle.prototype`.

```JS
Rectangle.prototype.calculateArea = function () {
  const area = this.width * this.height;
  console.log(`Total area is ${area}, from width of ${this.width}, 
              and height of ${this.height}.`);
}
```

* Show that everything still works and the prototypes (`Shape.prototype`
  and `Rectangle.prototype`) are set up as we expect and the
  `yellowRectangle` has access to all the methods
  

## Diagram #3 - Object.create() Diagram

![diagram3](https://github.com/appacademy/sf-lecture-notes/blob/master/javascript/w6d1-prototypes/assets/diagram_3.JPG)

## Object.create() Demo

* First build Circle constructor function

```JS
 function Circle(color, radius) {
  Shape.call(this, color)
  this.radius = radius;
}
```

* Now demo inheritance

```JS
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
```

* Create an instance to show that it works

```JS
const greenCircle = new Circle("green", 25);
console.log(greenCircle);
```

* Create a new method _only_ intended for the Circle constructor function

```JS
Circle.prototype.calcCircumference = function () {
  console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}`);
}
```

* Show that everything still works and the prototypes (`Shape.prototype`
  and `Rectangle.prototype`) are set up as we expect and the
  `yellowRectangle` has access to all the methods

## ES6 Class Syntax Example

* First refresh the page to reset everything (clear window) and then build
  from scratch
* The first class will be the Shape class

```JS
class Shape {
  constructor(color) {
    this.color = color;
  }

  sayHello() {
    console.log(`Hello, I am ${this.color}`);
  }
}
```

* Before creating the `Rectangle` class go into console and note how the code no longer works. With ES6 class syntax, we cannot say `Shape.call` - it can only be invoked with the `new` keyword. This is something to look out for and be aware of.
* Then create the `Rectangle` class

```JS
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    const area = this.width * this.height;
    console.log(`Total area is ${area}, from width of ${this.width}, 
                and height of ${this.height}.`);
  }
}
```

* Finally, create the `Circle` class - ask for a volunteer from the class to help you re-organize everything using ES6 class syntax.

```JS
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calcCircumference() {
    console.log(`My circumference is ${2 * Math.PI * this.radius} because my radius is ${this.radius}`);
  }
}
```

* Create the three instances again

```JS
  const blueShape = new Shape("blue");
  const yellowRectangle = new Rectangle("yellow", 6, 3);
  const greenCircle = new Circle("green", 25);
```

* Demo everything works correctly still and that the prototypes are what
  we expect

## Webpack Code Demo

* Talk about how we have 4 different script files we are loading in to `index.html` and how the order of them is important (if you haven't already now is a good time to show how messing with the order will break the code, since it is executed top-down).
* What we can do instead is have each of our files state it's dependencies at the top, and export it's functionality at the bottom. 
  * Add `require` statements to all files to import what is necessary (`rectangle.js` will need `Shape` and `inherits`, `circle.js` will need `Shape`)
  * Add `module.exports` statements to all files (each file should only export one thing as a default - if students ask how to export multiple things mention exporting an object and adding key-value pairs to it, but we will get into more complicated importing/exporting stuff later on in the course)
* Create a `main.js` file, that will load in all of the classes (`Shape`, `Rectangle`, and `Circle`) and move all instantiating of instances to this file. You'll also need to throw all of these objects on the window (wepback isn't going to make them available globally be default - it's a module bundler - the point is that your code is modular and not globally relied upon so we need to do this explicitly now) Let them know we are doing this, because really each of the other files should only contain code necessary to build the class, not actually create instances of it.
  * In a real app, you would have some file requiring in these classes, and creating instances from them to use.
* Our apps are going to be big trees, that will have some root node or starting point that will "kick-off" loading all our other files in - this file is called the _entry-point file_ and in our case it is `main.js`. We will run webpack on this file, specifying `bundle.js` as our output file. This is a bundled up version of all our code, and we can simply include this one JS file in `index.html` to load everything in. Wow, so much nicer!
  * run `webpack --watch main.js -o bundle.js --mode=development`
    * explain every part of that command
* Go in the browser and show that everything is working (hopefully it is - since we don't have a fancy webpack setup debugging will be hard so try not to mess up - if you do then double check all import/export statements).

---