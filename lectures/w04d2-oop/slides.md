# W4D2
## Principles of OOP 

---

## Learning Objectives
- Know how class inheritance works
- Know how to override a parent class's method, and when and how to use super
- Know when and why private and protected methods are used
- Know how to use modules

---

## Agenda
- Abstraction & Encapsulation
- Public, Private, and Protected
- Inheritance
- Modules
- Polymorphism

---

## The 4 Principles of OOP
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

---

## Abstraction
- **Abstraction:** “An abstraction denotes the essential characteristics of an object that distinguish it from all other kinds of objects (relative to the perspective of the viewer/user) thus providing crisply defined conceptual boundaries between types of objects.”
- Clock Analogy: The user can see the time displayed and access functional buttons
- Ruby Example: A Class' Interface

---

![clock](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w4d2-oop/images/clock.jpg?token=GHSAT0AAAAAABQN6MANF2YQEWBZ2JHQDAQ2YPPSRBQ)

---

## Encapsulation 
- **Encapsulation:** Hiding and restricting access to the internal representation of an object or the data it carries and only allowing users to interact with the object through public methods
- Restricts access and reduces the possibility of users affecting your object in an unintended way, as you have defined the valid interactions
- Clock Analogy: User cannot mess with the gears of the clock (gears are encapsulated)
- Ruby Example: Classes encapsulate logic/data from the rest of the application as they can only be accesed through that class
- Ruby Example 2: Private/Protected methods encapsulate data further as it can only be accessed within the class

---

![clock-innards](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w4d2-oop/images/clock_innards.jpg?token=GHSAT0AAAAAABQN6MAN3TJMAVZMJ2XEJMGIYPPSRYQ)

---

#### Abstraction vs. Encapsulation

How are they different?
+ Encapsulation is from the object's perspective and is concerned with hiding the internal implementation of an object.
+ Abstraction is from the perspective of other objects or the user and is concerned with how we design the API endpoints - the interface.

How are they the same?
+ "Two sides of the same coin"/"Encapsulation is the father of Abstraction"
+ They are both paradigms for looking at design. e.g. Whether or not something is considered Abstraction or Encapsulation may depend on how you are looking at it.


---

## Clock Demo

---

## Public, Private, and Protected
- Expose limited interface
- Indicate to others how to use your code
- Make code more atomic 
- Can more easily refactor without changing the interface
-- If a method is private, you know that no one else is relying on it so you can change it as you please

---

## Calling Methods Explicitly vs Implicitly
- **Implicitly** is without a receiver
- **Explicitly** is with a receiver (like `self` or another instance of the class)
```ruby
    class Test
        def example_method
            self.some_method # called explicitly on `self`
            some_method # called with implicit `self`
        end
        def some_method
        end
    end
```

---

## Public
- API endpoints for user - _interface_
- In Ruby, this is the default if no other keyword is specified
- Can be called anywhere inside or outside the class definition
- Can be called explicitly or implicitly

---

## Private
- Can only be called *within the class definition*
- Must be called implicitly (**except setters**)
- Helper methods should usually be `private`

---

## Protected
- Middle ground between `public` & `private`
- Can only be called *within the class definition* (can be called in classes that inherit from class in which it is defined)
- Can be called implicitly or explicitly
- Can be used on other instances of the class

---

## Where will we error? 

```ruby 
class Test
    def test_method(other_instance)
        public_method                   # a
        self.public_method              # b
        other_instance.public_method    # c
    end

    def public_method
        puts "This is a public method"
    end
end
a = Test.new
b = Test.new
a.test_method(b)
a.public_method                         # d
# no error                              # e
```

---

## Where will we error? 

```ruby 
class Test
    def test_method(other_instance)
        private_method                  # a
        self.private_method             # b
        other_instance.private_method   # c
    end

    private
    def private_method
        puts "This is a private method"
    end
end
a = Test.new
b = Test.new
a.test_method(b)
a.private_method                        # d
# no error                              # e
```

---

## Where will we error? 

```ruby 
class Test
    def test_method(other_instance)
        protected_method                  # a
        self.protected_method             # b
        other_instance.protected_method   # c
    end

    protected
    def protected_method
        puts "This is a protected method"
    end
end
a = Test.new
b = Test.new
a.test_method(b)
a.protected_method                        # d
# no error                              # e
```

---

## Code Demo - Public, Private, Protected Methods

---

## Inheritance

```ruby
class SubClass < SuperClass
end
```
- DRY up code by creating subtypes of existing classes
- 'Child classes' (subclasses) will have access to methods defined on their 'Parent class' (superclass)
- Subclass can only have **ONE** superclass, but superclass can have multiple subclasses

---

## Inheritance Demo

---

### Inheritance Pitfalls


+ Inheritance creates implicit dependencies.
    + Inherited methods and variables are not listed in the subclass code.
    + Multiple inheritance and mixins: potential for conflict.
+ Don't overwrite the interface!
    + Okay to change the implementation (but stay DRY)
    + Okay to add to the interface

---

## `super`

```ruby
class SuperClass
    def some_method
        puts "in SuperClass#some_method"
    end
end

class SubClass < SuperClass
    def some_method
        super
        puts "in SubClass#some_method"
    end
end
s = Subclass.new
s.some_method # Will print "in SuperClass#some_method" then "in SubClass#some_method"
```

---

## Inheritance

- methods on subclass override those of the parent. you can invoke the parent's overridden definition of a method using `super`.
- `super` method tells Ruby to call the inherited method by the same name as the current method
- Often used in `initialize` if we want some shared initialization behavior for our subclass
- `super` with no parentheses passes **all arguments** this method received to the superclass' method
- `super(arg)` with specific arguments passes **just those arguments** to the superclass's method
- `super()` with empty parentheses passes **no arguments** to the superclass' method

---

## Super Demo - add @fur_color to Cat class 

---

## Modules
- Sometimes we have shared functionality that doesn't make sense to group under a shared parent
- Modules allow us to write functionality we can add to classes
- A module is like a class that can't be initialized - we can never have an instance of a module
- While a class can only inherit from one superclass, it can include any number of modules
- Modules don't necessitate any relationship between the classes that use them
- Modules keep our code DRY

---

## Module Demo

---

## Polymorphism

- Subclasses can override the behavior of superclass
- Each inheriting class can do something different when calling a method by the same name
- We can treat an object as the generic version, and have specific behavior determined by the particular subclass of the instance
- Furthermore, each instance of a class can have different instance variables

---
## Duck Typing

"If it looks like a duck and it quacks like a duck, it's a duck!"

![duckTyping](https://media.giphy.com/media/48zjXYRwBg5IQ/giphy.gif)

---

## Today's Project

- Updated UML Diagram:
    - `Pawn` has a `#moves` public method, not a `#move_dirs`
    - `NullPiece` has an `#empty?` method
- If you're not sure what a method is supposed to do, ask!


[chessUML](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w4d2-oop/images/chess.jpeg?token=AP34ZYQ2TCPUHXSWS6HVLS3BKMWSW)


