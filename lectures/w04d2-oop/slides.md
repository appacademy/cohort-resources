# W4D2
## Principles of OOP 

![oop](https://media4.giphy.com/media/rr7AXwx8VHVdhtP4jI/200.gif)

---

## What is the programmer's greatest enemy?

---

![reality](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xIRLkLTjAtcK75sTYYJQTpXrS3eF9fQMYA&usqp=CAU)

---

![uml](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/chess.jpg)

---

"Controlling complexity is the essence of computer programming."

— Brian Kernighan

![brian](https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/media/images/2011/Nov/topimg_17442_bwk_frank.jpg)



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

- Interface vs. Implementation
- You only need to understand an object's interface to use it.
- No understanding of its implementation is needed.

- “An abstraction denotes the essential characteristics of an object that distinguish it from all other kinds of object and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer.”

---

![car](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/car.jpeg)

---

![car-innards](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/ruby/oop/car_inner.jpeg)

---


## Encapsulation 

- All the data and logic for an object to work should be _encapsulated_ in that object.
- Bundle data with the methods that operate on that data.
- Restricts access and reduces the possibility of users affecting your object in an unintended way, as you have defined the valid interactions.



---

#### Abstraction vs. Encapsulation

+ Two sides of the same coin. 
+ Encapsulation is from the object's perspective and is concerned with the internal implementation of an object and what it exposes to the users.
+ Abstraction is from the perspective of other objects or the user and is concerned with how we design the API endpoints - the interface.

---
#### In a few words...

- The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. 

- The meaning of Abstraction is to hide the implementation of the system (class) to provide a simple interface.

---

## Clock Demo

---

## Public, Private, and Protected
- Expose limited interface
- Indicate to others how to use your code
- Break logic into smaller methods
- Easier to refactor without changing the interface

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
- This is the default if no other keyword is specified
- Can be called anywhere inside or outside the class definition
- Can be called explicitly or implicitly

---

## Private
- Can only be called *within the class definition*
- Always will be called on `self` (implicitly or explicitly)
- Cannot be called on another instance 
- Helper methods should usually be `private`

---

## Protected
- Middle ground between `public` & `private`
- Can only be called *within the class definition*
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

## Code Demo - public, private, protected

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

- methods on subclass override those of the parent. you can invoke the parent's overridden definition of a method using `super`.
- `super` method tells Ruby to call the inherited method by the same name as the current method
- Often used in `initialize` if we want some shared initialization behavior for our subclass
- `super` with no parentheses passes **all arguments** this method received to the superclass' method
- `super(arg)` with specific arguments passes **just those arguments** to the superclass's method. Must be the same ammount of args as the parent method expects.
- `super()` with empty parentheses passes **no arguments** to the superclass' method. Only when the parent method does not take any arguments.

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
