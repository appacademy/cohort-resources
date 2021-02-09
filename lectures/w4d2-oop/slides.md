# W4D2

### Object-Oriented Programming

![UML diagram](https://lkrnac.net/wp-stuff/uploads/2014/04/animals-class-diagram.png)

---

## Lecture Goals

1. Sufficient background knowledge for today's projects
2. Context and motivation for OOP
3. OOP concepts & vocabulary

---

## Lecture Outline

1. Procedural Programming
1. OOP Context
2. What is OOP?
3. UML
4. The Four Principles of OOP
    1. Encapsulation
    2. Abstraction
    3. Polymorphism
    4. Inheritance
5. OOP Design Patterns
6. Exceptions
7. The OOP Path

---

## OOP Context

#### What is the programmer's greatest enemy?
---

![Software Engineering perception vs. reality](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/ruby/w4d2-oop/swe_reality.jpg?token=ABAUATUWNUPAL4HSV7A2EQC5G2ZHE)

---

> Controlling complexity is the essence of computer programming.
>
> &mdash; _Brian Kernighan_

![Brian Kernighan Photo](http://2.bp.blogspot.com/-vjmojesfTK0/UwjkPF_nLLI/AAAAAAAACHY/7cTOimc_e5g/s1600/Brian+Kernighan.jpg)

---

## Complexity Limits Solutions

+ code complexity limit = short-term memory limit
+ You can hold **4 things** in short-term memory

If we reduce the mental complexity of code, we increase the complexity of the problems we can solve.


---

## OOP Controls Complexity

+ Locates related code in the same place
+ Limits inter-dependencies in code
+ Reduces repeated code (DRY)
+ Intuitive because it mirrors physical reality

---

## Questions?

1. OOP context
2. Software Complexity
3. OOP Advantages

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

![UML Key](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/ruby/w4d2-oop/uml_key.png?token=AG2UGP4Q6JPJ55UULNJ7DRC7IL6NK)

---

## Questions?

1. OOP vs. Procedural Programming
2. Objects, data and methods
3. Classes, instances, and instantiation
4. UML

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
---

### What is an Interface?

+ A signature of _methods_, _arguments_, _argument types_, and _return types_.
+ Basically, anything that would cause a caller to break if changed.

![puzzle pieces](https://healingaftermyhusbandsaffair.files.wordpress.com/2013/06/puzzle-pieces.jpg)


---

### Coupling

+ The size and complexity of the interface between two objects.
+ _tight coupling_ = hard to change
    + Large interface or too much knowledge of implementation
+ Well-designed interfaces lead to _loose coupling_.

![tangled headphones](http://tweakyourbiz.com/marketing/files/headphones09.jpg)

---

### Demo - Animal Farm

![Animal Farm](http://i.huffpost.com/gen/1378040/images/o-ANIMAL-FARM-facebook.jpg)

Let's try and refactor some procedural code using our Object-Oriented tools and the principle of _encapsulation_.


---

## Questions?

1. Encapsulation
2. Interface / Coupling (we'll flesh this out more later)
3. Demo

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
+ All of computation is built on this principle.

---

![car interface](https://pro2-bar-s3-cdn-cf.myportfolio.com/f970bec91caea68a8c20114d1613dd40/b6a020e5-aa58-4d96-abd3-c281d780bd5a_rw_1200.jpg?h=aefc2c271daaf7c6e251377b698d714d)


---

![car implementation](https://pro2-bar-s3-cdn-cf.myportfolio.com/f970bec91caea68a8c20114d1613dd40/847ef4f7-1f0b-4e3b-be6f-d2fafb56bad5_rw_1200.jpg?h=ac211ba5b6a7761e2daa79afa8fc9df0)


---

### Abstraction vs. Encapsulation

+ Complementary, but not the same.
+ Encapsulation: Each class should be self-contained.
    + If I modify a class's code, I shouldn't have to touch _any other_ code (unless I change the interface).
+ Abstraction: I shouldn't have to _think_ about how a class is implemented to use it.


---

### Back on the Farm...

![Animal Farm](http://bluecerealeducation.com/sites/default/files/AnimalFarm1.jpg)


---

### Questions?

1. Abstraction
2. Abstraction vs. Encapsulation
3. Demo

---

## The 4 Principles of OOP

1. Encapsulation
2. Abstraction
3. => **Polymorphism** <=
4. Inheritance

---

### Duck Typing

+ "If it looks like a duck and quacks like a duck, it's a duck."
+ Ruby is _dynamically typed_.
  + You don't have to declare variable types.
  + It doesn't complain about mismatched types.
  + You can get `NoMethodError`s.

---

### Polymorphism

+ Objects with the same interface are interchangeable.
+ _Even if_ they're different types.
+ You can use this to eliminate type-checking logic.

---

### Speaking of ducks...

![Animal Farm](https://bookscarra.files.wordpress.com/2014/05/1cedab0154fd4025485b6e4d6f20b1711.jpg)

---

### Questions?

1. Duck Typing
2. Polymorphism
3. Demo

---

## Let's take a break!

![Horse bedtime gif](https://media.giphy.com/media/lvsCopWLh7R96/giphy.gif)

---

### OOP (Object-Oriented Platonism)

![Platonic Class](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/ruby/w4d2-oop/platonic_class.jpg?token=ABAUATTTDXW62MIOL2BLHJC5G2Z32)


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

### superclass
a.k.a. parent class, base class

A class that is used as the basis for inheritance.

### subclass
a.k.a. child class

A class that inherits from a parent class.


---

### `super`

+ methods on subclass override those of the parent
+ you can invoke the parent's overridden definition of a method using `super`.
  + `super` with arguments passes the given values into the super class' version
  of the method
  + `super` without arguments implicitly uses those passed into sub class'
  version of the method

---

### Let's try these out!

![Animal Farm](https://dougiejones.files.wordpress.com/2017/01/boxer.jpg)

---

### Questions?

1. Inheritance
2. `Subclass < Superclass`
3. `super`
4. Demo


---

## Mixins

+ Mixins are an alternative to inheritance as a way of adding functionality to a class.
+ Mixins are modules. (e.g. `Enumerable`, `Comparable`, `Kernel`)
+ You can include multiple mixins in a single class.
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

+ Inheritance is used for objects that relate to each other taxonomically. (A `FordAnglia` is a `Car`.)
+ Mixins are used to add functionality to different kinds of things. (An enchanted `FordAnglia` and a `FlyingBroomstick` are both `Flyable`.)


---

### Meanwhile, back on the farm...

![Animal Farm](https://bookscarra.files.wordpress.com/2014/05/af30.jpg)

---

### Inheritance Pitfalls

+ Inheritance creates implicit dependencies.
    + Inherited methods and variables are not listed in the subclass code.
    + Multiple inheritance and mixins: potential for conflict.
+ Don't overwrite the interface!
    + Okay to change the implementation (but stay DRY)
    + Okay to add to the interface

---

### Questions?

1. Mixins
    + `::include`
    + `::extend`
2. Mixins vs. Inheritance
3. Demo
4. Inheritance Pitfalls

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

+ Control access to a limited resource, usually some kind of IO.
    + (e.g. stdio, file system, screen, logger, etc)
+ Reuse reference to a stateless object (e.g. `nil`)

![Highlander: There can be only one.](http://paradisefoundaround.com/wp-content/uploads/highlander_there_can_be_only_one_quote.jpg?74f3cb)


---

### Demo Time!

![Animal Farm](http://img.sparknotes.com/content/sparklife/sparktalk/bloggingtheclassicsanimalfarmsparknotes_MediumWide.jpg)

---

## OOP Tips

+ Decompose the system into parts
    + Nouns could be objects.
    + Verbs could be methods.
+ Single Responsibility Principle
    + A class does only one thing
    + Beware of the "God Object"
+ Define the interfaces first, then implement.
    + An object can have multiple interfaces.
    + Don't reach into an object. Stick to the interface.

---

### Questions?

1. Null Object Pattern
2. Singleton Pattern
3. Demo
4. OOP Tips
    + Object Decomposition
    + Single Responsibility Principle
    + Interface before implementation

---

## The OOP Path

+ Creativity - more an art than a science
+ Experience - know where different design choices lead
+ Education - know common patterns and use them
    + Learn to pick the right tool for the problem at hand.
    + We're giving you some tools to start your toolbox.
    + I recommend _Head First Design Patterns_ after you're comfortable with the basics.
---

##  Today's Projects

- Class inheritance
- Chess - [UML Diagram](https://github.com/appacademy/curriculum/blob/master/ruby/assets/Chess_Diagram.png?raw=true)

![pets playing chess](https://i.giphy.com/media/XxMTS8OOwl59C/giphy.webp)

---

## Go make it happen!

![Dog leaping over sheep](https://i.giphy.com/media/10E8Jj1TSQaul2/giphy.webp)