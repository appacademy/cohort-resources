# Demos

For each of these, I tell the students to copy the 2-4 lines of code to follow
along as we draw it. I walk through each line and show exactly what is
happening. I use circles as functions and squares as objects.

Title each object/function so students can look back at their notes later.

Use Chrome devtools so it is easy to look at objects.

**NB** Contact Aaron to see his drawings, no time to redraw and upload them.

## The `new` operator

Make sure you and the students have this written down visible to you:

1. Make new object
2. Assign `[[protoype]]` (`__proto__` and `constructor`)
3. Make `this` point to the object
4. Call constructor in context of the new object
5. Automatically return the object

Draw this leaving room for the `Object` above it in the next demo so you don't
have to redraw. Is nice to also leave room for `__proto__` above `constructor`
in the `Array.prototype` so it looks nice.

Code this line by line

```js
Array
Array.prototype
Array.prototype.constructor // Array
let a = new Array(3, 7);
a
a.constructor
a.__proto__
a.__proto__ === Array.prototype
```

## After `Prototypes` slide

Draw this.

![]()

Then code this:

```js
Array.prototype // note the __proto__ property
Array.prototype.__proto__ // Object's prototype
Array.prototype.__proto__.constructor // Object

// Let's do an example

Object.prototype.helloWorld = function helloWorld() { 
  console.log('Hello World!');
}; // We name this function so it tells us its name when it fails for debugging

let a = new Array();

a.helloWorld(); // make sure it works

// Let's simulate how it climbs the prototype chain

a.hasOwnProperty('helloWorld') // false
a.__proto__.hasOwnProperty('helloWorld') // false 
a.__proto__.__proto__.hasOwnProperty('helloWorld') // true!
```

## Surrogate

Have the code ready to reference.

Draw this:
![]()

Then code it:

```js
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};

function Rectangle() {
  // You will need to explain this thoroughly
  // Without it, this.x and this.y will not be set.
  // Is good to do it without this first to show them they are missing.
  Shape.call(this);
}

Surrogate() {}
Surrogate.prototype = Shape.prototype;
Rectangle.prototype = new Surrogate();
Rectangle.prototype.constructor = Rectangle;

// Test

let r = new Rectangle()
r
r.move(2, 7);
r.move(2, 7);
r.__proto__.constructor // Rectangle
r.__proto__.__proto__.constructor // Shape
```

## Object.create

Have the code ready to reference.

Draw this

![]()

Then code this with the same `Shape` and `Rectangle`
```js
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Test like above
```

## Classes

I didn't do a drawing or code for this, just showed an example.
I think it's so similar to what they know it's easy to understand.

