# W4D2
## Principles of OOP 

---

## Learning Objectives
- Learn the principles of OOP
- Know how class inheritance works
- Know how to override a parent class's method, and when and how to use super
- Know when and why private and protected methods are used
- Know how to use modules

---

## Agenda
- Principles of OOP
- Abstraction & Encapsulation
- Public, Private, and Protected
- Inheritance
- Modules
- Polymorphism


---
## What is the programmer's greatest enemy?
---
![reality](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xIRLkLTjAtcK75sTYYJQTpXrS3eF9fQMYA&usqp=CAU)
---
Controlling complexity is the essence of computer programming.

— Brian Kernighan
![brian](https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/media/images/2011/Nov/topimg_17442_bwk_frank.jpg)
---

## The 4 Principles of OOP
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism


---

## Abstraction
- “An abstraction denotes the essential characteristics of an object that distinguish it from all other kinds of object and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer.”

- Abstraction focus on what the object does instead of how it does it.
---
![clock](https://media.istockphoto.com/photos/wall-clock-isolated-on-white-ten-past-ten-picture-id590618818?k=20&m=590618818&s=612x612&w=0&h=ukPrajYdI1PZxXm5h2N0fb6wF-LLUGKwFEWhl7YKGfg=)
---

![clock-innards](https://cdn.britannica.com/08/99008-004-2520D596.gif)

---

## Encapsulation 
- Bundling data with the methods that operate on that data.
- All the data and logic for an object to work should be _encapsulated_ in that object.
- Restricts access to our data.


---

#### Abstraction vs. Encapsulation

+ Two sides of the same coin.
- Encapsulation: Each class should be self-contained.
	- If I modify a class's code, I shouldn't have to touch any other code (unless I change the interface).
- Abstraction: I shouldn't have to think about how a class is implemented to use it.
+ Abstraction is from the perspective of outside of the object and is concerned with how we design the API endpoints - the interface.
+ Encapsulation is from the object's perspective and is concerned with the internal implementation of an object and what it exposes to the users.


---

## Clock Demo

---

## Public, Private, and Protected
- Expose limited interface
- Indicate to others how to use your code
- Break logic into smaller methods
- Can more easily refactor without changing the interface

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
- Always will be called on `self`
- Helper methods should usually are `private`

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
- Methods on subclass override those of the parent. you can invoke the parent's overridden definition of a method using `super`.
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

---

## Duck Typing

"If it looks like a duck and it quacks like a duck, it's a duck!"

![duckTyping](https://media.giphy.com/media/48zjXYRwBg5IQ/giphy.gif)

--- 

---
### OOP Tips
1. Decompose the system into parts
	- Nouns could be objects.
	- Verbs could be methods.
2. Single Responsibility Principle
	- A class does only one thing
	- Beware of the "God Object"
3. Define the interfaces first, then implement.
	- An object can have multiple interfaces.
	- Don't reach into an object. Stick to the interface.

---

## Important OOP Patterns for today
- Null Object Pattern
- Singleton Pattern

---
### Null Object Pattern
- Standing for a null value that maintains a required interface
- Avoids NoMethodErrors

---

### Singleton Pattern
- Control access to a limited resource.
- Reuse reference to a stateless object (e.g. nil)

---

## Tips for Chess
- Sample Chess UML Diagram:
    - `Pawn` has a `#moves` public method, not a `#move_dirs`
    - `NullPiece` has an `#empty?` method
- If you're not sure what a method is supposed to do, ask!
---

![chessUML](https://assets.aaonline.io/fullstack/ruby/assets/Chess_Diagram.png)



