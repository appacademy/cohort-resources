# W4D2

### Object-Oriented Programming

![UML diagram](https://lkrnac.net/wp-stuff/uploads/2014/04/animals-class-diagram.png)

---

## Lecture Goals

1. Sufficient background knowledge for today's projects
2. Context and motivation for OOP
3. OOP concepts & vocabulary

---

## Lecture Structure

* We will hold questions for specific slides.
* These slides will have an outline.
* We will also take questions during demos.

Note:
If you feel overwhelmed and confused by OOP, that's normal. It takes a lot of practice until you develop the intuitions to feel comfortable with it. You probably won't get there this week or even during the cohort.

---

## Lecture Outline

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

Note:
+ This is a rhetorical question
+ The answer is "reality"

---

![swe_reality](https://user-images.githubusercontent.com/49164119/85312909-56908180-b46c-11ea-8517-c3cb8dbc3fee.jpg)

Note:
+ Design is elegant. Reality is messy.
+ Solutions are simple and elegant in your mind. Real code is ugly, filled with bugs and idiosyncratic that require messy conditional logic.

---

## xkcd's take

![xkcd Lisp](https://imgs.xkcd.com/comics/lisp.jpg)

+ Lisp vs. Perl is a debate from dawn of the internet
+ Lisp = elegant, structured, hard to write
+ Perl = ugly, easy to write, hard to read

Note:
While Lisp programmers were busy worrying about structure, Perl programmers actually wrote the code that makes the internet run, but we're all saddled with the legacy of that hacky code.

---

> Controlling complexity is the essence of computer programming.
>
> &mdash; _Brian Kernighan_

![Brian Kernighan Photo](http://2.bp.blogspot.com/-vjmojesfTK0/UwjkPF_nLLI/AAAAAAAACHY/7cTOimc_e5g/s1600/Brian+Kernighan.jpg)

Note:
You need code that's simple and easy to reason about in order to write and maintain it, but it still needs to perform complex functions that are often idiosyncratic and hard to reason about.

(Brian Kernighan is one of the foundational programmers of the 60's and 70's. He came up with the name "Unix" and co-authored the first book on C with Dennis Ritchie.)

---

## Complexity Limits Solutions

+ code complexity limit = short-term memory limit
+ You can hold **4 things** in short-term memory

If we reduce the mental complexity of code, we increase the complexity of the problems we can solve.

Note:

Check out the [Coursera course on Learning How to Learn](https://www.coursera.org/learn/learning-how-to-learn). If you struggle with studying efficiently, it might be worth your time to go through this next weekend.

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

Note:
You don't directly manipulate the data like in procedural programming. You call _methods_ and the methods manipulate the data.

---

## Classes vs. Objects

+ A _class_ is the blueprint for an object.
+ An object is an _instance_ of a class.
+ In Ruby, objects are _instantiated_ using `::new`, which calls `#initialize`.

Note:
This slide should be review for you, but placed in context.

---

## UML

+ "Unified Modeling Language"
+ We'll use this to diagram classes today.

![uml_key](https://user-images.githubusercontent.com/49164119/85315456-f3085300-b46f-11ea-8fd7-e60f79eeba48.png)

Note:
+ Demo this on the iPad, whiteboard or [draw.io](https://www.draw.io/) with a very basic class using audience input.
+ Reference the legend on the slide.

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

Note: 
#### Metaphor: a Cell

+ Everything you need to run a cell is right there together.
+ There's a boundary/interface (cell wall).
+ Mitochondria aren't wandering around the body. There in one place where it's easy to find them.

---

### Public, Private & Protected
* `public`: can be called by anyone. Default
>
* `private`: cannot be called with an explicit receiver.
	+ Therefore, can only be called within the defining class.
  + **Exception**: private setter methods must be called explicitly
>
* `protected`: can only be called by instances of same class or subclass


---

### What is an Interface?

+ A signature of _methods_, _arguments_, _argument types_, and _return types_.
+ Basically, anything that would cause a caller to break if changed.

![puzzle pieces](https://healingaftermyhusbandsaffair.files.wordpress.com/2013/06/puzzle-pieces.jpg)

Note:
+ This is a central concept in OOP. It will come up in all 4 of the main principles.
+ Each side of a puzzle piece is an interface. Another puzzle piece must match that interface to fit.
+ The central OOP design question: What _interface_ should this object have?

---

### Coupling

+ The size and complexity of the interface between two objects.
+ _tight coupling_ = hard to change
    + Large interface or too much knowledge of implementation
+ Well-designed interfaces lead to _loose coupling_.

![tangled headphones](http://tweakyourbiz.com/marketing/files/headphones09.jpg)

Note:

Tight Coupling Examples:

+ the headphones ("spaghetti code" - dependencies stringing every which way)
+ also like puzzle pieces with 50 tongue/grooves between them. If even one of those gets changed...

---

### Demo - Animal Farm

![animal1](https://user-images.githubusercontent.com/49164119/85326063-7aaa8d80-b481-11ea-8881-d99908169b4e.jpg)

Let's try and refactor some procedural code using our Object-Oriented tools and the principle of _encapsulation_.

Note:
+ Add a "Napoleon" pig and have it move and make noise to show how hard it is to modify the code.
+ Refactor into different classes for the different animals.
  + Create UML diagram first.
  + Classes should have separately-named methods for move and make noise because we haven't gotten to polymorphism yet.
  + Demo out private & protected readers/setters

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
    + If I modify a class's code, I shouldn't have to touch _any other_ code (unless I change the interface).
+ Abstraction: I shouldn't have to _think_ about how a class is implemented to use it.

Note:
Same idea from two perspectives:
+ Encapsulation is from the object's perspective.
+ Abstraction is from the perspective of other objects.

---

### More Animals

![animal2](https://user-images.githubusercontent.com/49164119/85326140-a299f100-b481-11ea-96df-18d36045ae57.jpg)

Note:
+ Create `Farm` class to contain all the variables. Give it an `#each` that iterates through the animals.
+ have each animal make noise.
+ Change the way animals are stored, affecting how `#each` works.

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

Note:
+ As long as you only care about appearance and sound, this quote is true.
+ This is the meaning of `undefined method ... for nil:NilClass`.

---

### Polymorphism

+ Objects with the same interface are interchangeable.
+ _Even if_ they're different types.
+ You can use this to eliminate type-checking logic.

Note:
Even in statically typed languages, you can declare variable types by interface.

---

### Speaking of ducks...

![dog_duck](https://user-images.githubusercontent.com/49164119/85323427-d6bee300-b47c-11ea-838b-f8bc1d18ebdf.jpg)

Note:
+ Try to add a Duck class. Show how cumbersome the case statement becomes.
+ Refactor to use polymorphism.

---

### Questions?

1. Duck Typing
2. Polymorphism
3. Demo

---

## Let's take a break!

![Horse bedtime gif](https://media.giphy.com/media/lvsCopWLh7R96/giphy.gif)


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

Note:
+ sub classes 'inherit' all behavior from parent class
+ can add methods to subclass without changing parent
+ methods defined on subclass 'override' parent

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

![YES!](https://media.giphy.com/media/TL0oXBlykdF7ekXI9w/giphy.gif)

Note:
+ Draw out a class hierarchy.
+ Implement the classes.
+ Add a new Goat class to show how easy it is now.
+ Demonstrate super.

---

### Questions?

1. Inheritance
2. `Subclass < Superclass`
3. `super`
4. Demo

Note:
### How Ruby Dereferences Method Names (for the curious)

* All Ruby methods live in some class or module.
  * Methods defined in empty space actually live in the `Object` class.
* All inherited classes and included modules are kept in a list.
  * The list is ordered from child to parent.
* When you call a method, Ruby looks down the list until it finds a match.
* You can see this list using `#class.ancestors`.
* `super` starts the search one rung down on the ladder.

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

+ Inheritance uses **_classes_**.
+ Mixins are **_modules_**.

#### What you get:

+ Inheritance adds _both_ instance and class methods.
+ Mixins only add one or the other (`include` vs. `extend`).

Note:
+ The way Mixins and inheritance are implemented under the hood in Ruby is very similar. The functionality is almost identical.
+ We don't talk about `included` hooks today since they won't use those for this project.

---

### Mixins vs. Inheritance

#### How they're used:

+ Inheritance is used for objects that relate to each other taxonomically. (A `FordAnglia` is a `Car`.)
+ Mixins are used to add functionality to different kinds of things. (An enchanted `FordAnglia` and a `FlyingBroomstick` are both `Flyable`.)

Note:
+ (for Harry Potter fans) Think of adding a mixin is like putting a magical charm on something. Broomsticks and cars can both be enchanted to fly, even though they have no common taxonomy.

---

### More Animals again

![Animal Farm](https://media.giphy.com/media/h8ISB2nUVITEWjVgGo/giphy.gif)

Note:
+ Implement `MyEnumerable`.
+ include it in `Farm`.
+ change `include` to `extend`. Use a simple fixed array for `::each`.
+ change `MyEnumerable` to `Enumerable` to show that it works the same way.

---

### Inheritance Pitfalls

+ Inheritance creates implicit dependencies.
    + Inherited methods and variables are not listed in the subclass code.
    + Multiple inheritance and mixins: potential for conflict.
+ Don't overwrite the interface!
    + Okay to change the implementation (but stay DRY)
    + Okay to add to the interface

Note:
+ The interface between the subclass and parent class is implicit, and can be very large if you aren't careful. Ruby especially makes this hard (implicit self, all global methods live in Object)
+ Mixin methods override inherited methods
+ Liskov Substitution Principle - any type can be replaced by subtype without breaking

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

Note:

Highlander is basically the most '80's movie imagineable. A hunky Scotsman from the clan era gets dropped in the middle of New York City, falls for a woman with '80's bangs, and fights a punk villain to the death with broadswords. Oh, and the soundtrack is by Queen!

---

### Demo Time!

![Animal Farm](https://media.giphy.com/media/Q6rmxQIJ4jhGRxEf7o/giphy.gif)

Note:
+ Implement a null animal. Overwrite `#move` and `#make_noise`.
+ Include `Singleton` - it's stateless, so we can just reuse it
    + Try to call `#new`
    + Show how this impacts `==`

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

## Exceptions

+ Tell the caller that you can't do what was asked.
+ Unhandled exceptions bubble up the call stack.
+ Sometimes raised on purpose to control program flow.
    + Whenever you want to exit a method without returning or continuing.
    + e.g. `404 Not Found` errors in Rails.

---

### Exception Syntax:

```rb
raise ErrorClass.new("message")

raise ErrorClass, "message"

raise "this shorthand will raise a RuntimeError"

begin
    do_something_dangerous
rescue
    change_parameters
    retry
ensure
    close_file
end

def implicit_begin
    do_something_dangerous
rescue TypeError => err
    puts "rescued from #{err}"
end

class MyCustomError < StandardError; end

raise MyCustomError, "I made my very own error!"
```

---

## Exceptions Code Demo

![Building!](https://media.giphy.com/media/IgvW7NI2FoeYJhw8D5/giphy.gif)

Note:
+ Implement `Horse#break_leg` and `Horse#heal_leg`. They should `puts`.
+ Create a custom `BrokenLegError < StandardError` for `Horse#movement`.
+ Use exception handling to catch error.
+ Call `Horse#heal_leg` in rescue.
+ Ensure `Horse#make_noise`

---

### Questions?

1. Exceptions
2. Exception Syntax
3. Demo

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

- Error Handling Funtime
- Class inheritance
- Chess - [UML Diagram](https://github.com/appacademy/curriculum/blob/master/ruby/assets/Chess_Diagram.png?raw=true)

![pets playing chess](https://i.giphy.com/media/XxMTS8OOwl59C/giphy.webp)

---