# W2D1

### Object-Oriented Programming

---

## Lecture Objectives

1. Sufficient background knowledge for today's projects
    2. Chess (Day 1)
2. Context and motivation for OOP
3. OOP concepts & vocabulary
4. Understand Public/Private/Protected
5. Intro to Modules

---

## Lecture Outline

1. OOP Context
2. What is OOP?
3. UML
4. The Four Principles of OOP
5. OOP Design Patterns
6. Exceptions
7. The OOP Path

---

## How to approach this topic

* OOP can feel like an overwhelming topic.
* Let's just start by talking about it.
* We'll go over some practical aspects of Ruby too!
  * With a lot of demo code

---

## OOP Context

#### Goal: Control Complexity

* There are countless ways to solve a problem
* OOP gives a structured way to break down that complexity
  * It's relatively easy for humans to grasp

---

## Complexity Limits Solutions

+ code complexity limit = short-term memory limit
+ You can hold **4 things** in short-term memory

If we reduce the mental complexity of code, we increase the complexity of the problems we can solve.

---

## OOP Controls Complexity

+ Places related code in the same place
+ Limits inter-dependencies in code
+ Reduces repeated code (DRY)
+ Intuitive because it mirrors physical reality

---

## What is OOP?

+ Procedural:
    + functions operating on data
    + emphasis: step-by-step instructions
+ Object-Oriented:
    + functions and data are combined into objects
    + emphasis: interactions between objects

---

## How does OOP work?

+ Objects contain _data_.
+ Objects have _methods_.
+ Methods can access and modify an object's _state_ (any data that it contains).
+ Objects can interact with one another via their methods.

---

## Classes vs. Objects

+ A _class_ is the blueprint for an object.
+ An object is an _instance_ of a class.
+ In Ruby, objects are _instantiated_ using `::new`, which calls `#initialize`.

---

## UML

+ "Unified Modeling Language"
+ We'll use this to diagram classes today.

![UML Key](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/ruby/w4d2-oop/uml_key.png?token=AHKLMACJQXP6UQW6DAUXSDK72J3RU)

Note:
+ Demo this on the iPad, whiteboard or [draw.io](https://www.draw.io/) with a very basic class using audience input.
+ Reference the legend on the slide.

---

## The 4 Principles of OOP

1. Encapsulation
2. Abstraction
3. Polymorphism
4. Inheritance

---

## The 4 Principles of OOP

1. => **Encapsulation** <=
2. Abstraction
3. Polymorphism
4. Inheritance

---

### Encapsulation

+ All the data and logic for an object to work should be _encapsulated_ in that object.
+ No one else should have access to these things.
    + Indirect access available through the defined _interface_.
    + `public` & `private` keywords
    + `attr_reader`, `attr_writer`, `attr_accessor`

Note:

#### Metaphor: a Cell

+ Everything you need to run a cell is right there together.
+ There's a boundary/interface (cell wall).
+ Mitochondria aren't wandering around the body. There in one place where it's easy to find them.

---

### What is an Interface?

+ A signature of _methods_, _arguments_, _argument types_, and _return types_.
+ Basically, anything that would cause a caller to break if changed.

![puzzle pieces](https://healingaftermyhusbandsaffair.files.wordpress.com/2013/06/puzzle-pieces.jpg)

Note:
+ An Interface is is a description of all functions that an object must have in order to be object "X"

---

### Coupling

+ The size and complexity of the interface between two objects.
+ coupling refers to the degree of direct knowledge that one element has of another
+ _tight coupling_ = hard to change
    + Large interface or too much knowledge of implementation
+ Well-designed interfaces lead to _loose coupling_.

![tangled headphones](https://tweakyourbiz.com/marketing/files/headphones09.jpg)

Note:

Tight Coupling Examples:
* In object oriented design, Coupling refers to the degree of direct knowledge that one element has of another. In other words, how often do changes in class A force related changes in class B
+ the headphones ("spaghetti code" - dependencies stringing every which way)
+ also like puzzle pieces with 50 tongue/grooves between them. If even one of those gets changed...

---

### Demo - Animal Farm (Part 1)

Let's try and refactor some procedural code using our Object-Oriented tools and the principle of _encapsulation_.

Note:
+ Add a pig and have it move and make noise to show how hard it is to modify the code.
+ Refactor into different classes for the different animals.
  + Create UML diagram first.
  + Classes should have separately-named methods for move and make noise because we haven't gotten to polymorphism yet.

---

## The 4 Principles of OOP

1. Encapsulation
2. => **Abstraction** <=
3. Polymorphism
4. Inheritance

---

### Abstraction

#### Interface vs. Implementation

+ You only need to understand an object's _interface_ to use it.
+ No understanding of its _implementation_ is needed.

Note:
You write in Ruby without worrying about what specific operations the CPU is doing. The Ruby compiler sends instructions to the CPU without worrying about how the logic gates are arranged or what the transistors are made of, etc.

---

![car interface](https://pro2-bar-s3-cdn-cf.myportfolio.com/f970bec91caea68a8c20114d1613dd40/b6a020e5-aa58-4d96-abd3-c281d780bd5a_rw_1200.jpg?h=aefc2c271daaf7c6e251377b698d714d)

Note:
* What do you need to interact with to drive a car?
* This is a car's _interface_.

---

![car implementation](https://pro2-bar-s3-cdn-cf.myportfolio.com/f970bec91caea68a8c20114d1613dd40/847ef4f7-1f0b-4e3b-be6f-d2fafb56bad5_rw_1200.jpg?h=ac211ba5b6a7761e2daa79afa8fc9df0)

Note:
* This is the car's _implementation_.
* You don't need to understand all this complexity to pass a driving test.

---

### Abstraction vs. Encapsulation

+ Complementary, but not the same.
+ Encapsulation: Each class should be self-contained.
    + If I modify a class's code, I shouldn't have to touch _any other_ code
+ Abstraction: I shouldn't have to _think_ about how a class is _implemented_ to use it.

Note:
Same idea from two perspectives:
+ Encapsulation is from the object's perspective.
+ Abstraction is from the perspective of other objects.

---

### Back on the Farm... (Part 2)

Note:
+ Create `Farm` class to contain all the variables. Give it an `#each` that iterates through the animals.
+ have each animal make noise.
+ Change the way animals are stored, affecting how `#each` works.

---

## The 4 Principles of OOP

1. Encapsulation
2. Abstraction
3. => **Polymorphism** <=
4. Inheritance

---

### Polymorphism

+ Objects with the same interface are interchangeable.
+ _Even if_ they're different types.
+ You can use this to eliminate type-checking logic.

---

### Duck Typing

+ "If it looks like a duck and quacks like a duck, it's a duck."
+ Ruby is _dynamically typed_.
  + You don't have to declare variable types.
  + You can get `NoMethodError`s.

Note:
+ As long as you only care about appearance and sound, this quote is true.
+ This is the meaning of `undefined method ... for nil:NilClass`.

---

### Speaking of ducks... (Part 3)

Note:
+ Try to add a Duck class. Show how cumbersome the case statement becomes.
+ Refactor to use polymorphism.

---

## The 4 Principles of OOP

1. Encapsulation
2. Abstraction
3. Polymorphism
4. => **Inheritance** <=

---

### Inheritance

+ Keeps code DRY by letting you re-use class implementations
+ Overwrite or extend this implementation in the subclass
+ Very useful for _polymorphism_
    + Interchange different subclasses of a parent class.
+ Creates a hierarchy of classes back to `BasicObject`

---

`class SubClass < SuperClass`

### Superclass
a.k.a. parent class, base class

A class that is used as the basis for inheritance.

### Subclass
a.k.a. child class

A class that inherits from a parent class.

---

### Subclass Behavior

+ Sub classes 'inherit' all behavior from parent class
+ Can add methods to subclass without changing parent
+ Methods defined on subclass 'override' parent

---

### `super`

+ methods on subclass override those of the parent
+ you can invoke the parent's overridden definition of a method using `super`.
  + `super` with arguments passes the given values into the super class' version
  of the method
  + `super` without arguments implicitly uses those passed into sub class'
  version of the method
  + `super()` to invoke the parent method with no arguments 

---

### Let's try these out! (Part 4)

Note:
+ Draw out a class hierarchy.
+ Implement the classes.
+ Demonstrate super.

---

### How does Ruby know if a method exists?

+ First it checks the class of the object you call the method on
+ Then it checks the parent class
+ Then it checks the next parent
+ Then it checks the next parent...
+ Up to `BasicObject`

---

## Modules/Mixins

+ Mixins are an alternative to inheritance as a way of adding functionality to a class.
+ Mixins are modules. (e.g. `Enumerable`, `Comparable`, `Kernel`)
+ You can have multiple mixins in a single class.
+ You can define methods and use `self` and `@ivars`, just like when defining a class.

---

### `::include`

This command adds a module's methods to a class as _instance_ methods.

### `::extend`

This command adds a module's methods to a class as _class_ methods.

---

### Mixins vs. Inheritance

#### Types involved:

+ Inhertance uses **_classes_**.
+ Mixins are **_modules_**.

#### What you get:

+ Inheritance adds _both_ instance and class methods.
+ Mixins only add one or the other (`include` vs. `extend`).

---

### Mixins vs. Inheritance

#### How they're used:

+ Inheritance is used for objects that relate to each other by type. (A `Toyota` is a `Car`.)
+ Mixins are used to add functionality to different kinds of things. (A `Dragon` (with wings) and a `FlyingBroomstick` are both `Flyable`.)

---

### Meanwhile, back on the farm... (Part 5)

Note:
+ Implement `Flyable`.
+ change `include` to `extend`.
+ Show error handling and implicit begin/end

---

### Inheritance Pitfalls

+ Inheritance creates implicit dependencies.
    + Inherited methods and variables are not listed in the subclass code.
    + Inheritance and mixins: potential for conflict.
+ Don't overwrite the interface!
    + Okay to change the implementation (but stay DRY)
    + Okay to add to the interface

Note:
+ The interface between the subclass and parent class is implicit, and can be very large if you aren't careful. Ruby especially makes this hard (implicit self, all global methods live in Object)
+ Mixin methods override inherited methods
+ Liskov Substitution Principle - any type can be replaced by subtype without breaking

---

## Important OOP Patterns for today

1. Null Object Pattern
2. Singleton Pattern

---

### Null Object Pattern

+ Standin for a null value that maintains a required interface
+ Avoids `NoMethodError`s
+ Ruby's `nil` itself is an example _#everythingisanobject_.
    + maintains the full `Object` interface
    + `to_s`, `is_a?`, `nil?`, etc.
    + doesn't include other methods you may need

---

### Singleton Pattern

+ Save space!!!
+ Reuse reference to a stateless object (e.g. `nil`)

![Highlander: There can be only one.](https://paradisefoundaround.com/wp-content/uploads/highlander_there_can_be_only_one_quote.jpg?74f3cb)

Note:

Highlander is basically the most '80's movie imagineable. A hunky Scotsman from the clan era gets dropped in the middle of New York City, falls for a woman with '80's bangs, and fights a punk villain to the death with broadswords. Oh, and the soundtrack is by Queen!

---

### Demo Time! (Part 6)

Note:
+ Implement a null animal. Overwrite `#move` and `#make_noise`.
+ Include `Singleton` - it's stateless, so we can just reuse it
    + Try to call `#new`

---

## OOP Tips

+ Break things down into parts
    + Nouns could be objects.
    + Verbs could be methods.
+ Single Responsibility Principle
    + A class does only one thing
    + Beware of the "God Object"
+ Define the interfaces first, then implement.
    + An object can have multiple interfaces.
    + Don't reach into an object. Stick to the interface.

---

## The OOP Path

+ Creativity - more an art than a science
+ Experience - know where different design choices lead
+ Education - know common patterns and use them
    + Learn to pick the right tool for the problem at hand.
    + We're giving you some tools to start your toolbox.

---

##  Today's Projects

- Class inheritance
- Chess - [UML Diagram](https://github.com/appacademy/curriculum/blob/master/ruby/assets/Chess_Diagram.png?raw=true)

![pets playing chess](https://i.giphy.com/media/XxMTS8OOwl59C/giphy.webp)

---

## Go make it happen!

![Dog leaping over sheep](https://i.giphy.com/media/10E8Jj1TSQaul2/giphy.webp)
