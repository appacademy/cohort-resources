# W4D2
## Principles of OOP 

---

## Learning Objectives
- Understand how class inheritance works
- Know when and how to use super
- Identify when to use private and protected methods
- Understand how to use a module

---

## Agenda

- Abstraction & Encapsulation
- Public, Private, and Protected
- Inheritance
- Modules
- Polymorphism

---

## What is Object Oriented Programming?

- A programming paradigm based around objects
	- Objects contain data
	- Objects can be modifed using methods defined on them
- Can be contrasted with *functional programming*

---

## The 4 Principles of OOP
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

---

## Abstraction
- **Abstraction:** In general, is the act of considering something as a general quality apart from concrete realities.
	+ ex: abstract art as opposed to realism
- In programming, refers to hiding the complexities of system behind a simplified UI

---

![vending1](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzdycThiOGczbDRwYjJ6eG04OTN3OXJ1OW9pMGZ0OHRzYXFjNnl5bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMs3YtMOBmPenqo/giphy.gif)

---

## Encapsulation 
- **Encapsulation:** Hiding and restricting access to the internal representation of an object
- Refers to defining the methods of an object such that a user can not modify it's data in unwanted ways
- Protection of internal state beyond the defined interface

---

![vendingstuck](https://media.giphy.com/media/3orieWl8u1f4aByhOw/giphy.gif)

---

#### Interface vs. Implementation

+ Two sides of the same coin. 
+ Abstraction is from the perspective of the user and is concerned with how we design the API endpoints - the interface.
+ Encapsulation is from the object's perspective and is concerned with the internal implementation of an object and what it does and doesn't expose to the users.


---

## Clock Demo

---

## Public, Private, and Protected
- Expose limited interface
- Indicate to others how to use your code
- Can more easily refactor without changing the interface

---

## Public
- API endpoints for user - _interface_
- This is the default if no other keyword is specified
- Can be called anywhere inside or outside the class definition

---

## Private
- Can only be called *within the class definition*
- Can only be called on `self`, implicitly or explicitly
- Helper methods should usually be `private`

---

## Protected
- Middle ground between `public` & `private`
- Can only be called *within the class definition*
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
```

---

## Code Demo - oop.rb

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
## `super`

- methods on subclass override those of the parent. you can invoke the parent's overridden definition of a method using `super`.
- `super` tells Ruby to call the inherited method of the same name
- Often used in `initialize` if we want some shared initialization behavior for our subclass

---
## `super` arguments

- `super` with no parentheses passes **all arguments** this method received to the superclass' method
- `super(arg)` with specific arguments passes **just those arguments** to the superclass's method
- `super()` with empty parentheses passes **no arguments** to the superclass' method

---

## Super Demo - add @fur_color to Cat class 

---

## Modules
- Sometimes we have shared functionality that doesn't make sense to group under a shared parent
- Allows us to write functionality we can add to classes
- Can not create instances of modules
- Classes can include any number of modules
- Modules don't necessitate any relationship between the classes that use them
- Modules keep our code DRY

---

## Module Demo

---

## Polymorphism

- Subclasses can override the behavior of superclass
- Each inheriting class can do something different when calling a method by the same name
- We can treat an object as the generic version, and have specific behavior determined by the particular subclass of the instance

---
## Duck Typing

"If it looks like a duck and it quacks like a duck, it's a duck!"

![duckTyping](https://media.giphy.com/media/48zjXYRwBg5IQ/giphy.gif)

---

## Today's Project

- Sample Chess UML Diagram:
    - `Pawn` has a `#moves` public method, not a `#move_dirs`
    - `NullPiece` has an `#empty?` method
- If you're not sure what a method is supposed to do, ask!

---

![chessUML](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/chess.jpg)