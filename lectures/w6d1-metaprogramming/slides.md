# W6D2or1

## Metaprogramming

---

## Learning Objectives

- Define metaprogramming
- Identify `self` in:
  + class definitions
  + class methods
  + instance methods
- Describe the difference between class variables and class instance variables
- Know how to use `send` and `define_method` (and `method_missing` if time allows)

---

## Agenda

* What is metaprogramming?
* Metaprogramming demos

---

## What is Metaprogramming?

* What is _programming_?

---

### What is Metaprogramming?

* The essence of programming is defining behaviour
* Metaprogramming is defining behaviour that will define future behaviour

---

### What is Metaprogramming?

* Often used to dynamically define a suite of similar methods based on undetermined future input to reduce duplicate code

Examples:

* `attr_reader`/`attr_writer`
* `belongs_to`/`has_many`
* `validates` 

- the extent of the lecture will be to explore a small collection of methods used in metaprogramming
- students are encouraged to explore and play around with things that we don't get to in lecture

---

### What is Metaprogramming?

* In practice, metaprogramming in Ruby makes use of a collection of methods to help the developer define behavior
* Today we'll explore just a small sample of those methods
* You may have unanswered questions or want to explore more on your own later

---

### Let's walk through some demos!

---

## Review
- Class variables (@@) vs class instance variables
  - Class variables can be inherited!
- When in doubt, trace what self refers to


---
### send

`receiver.send(:method_name, *args)`
- bypasses private!

---

### define_method 
`Class.define_method(:method_name) {|args| "do this stuff"}`
- Defines an instance method for the class it is called on. 
- Takes a block that defines the function of the method.
    

---

#### instance_variable_get(:name)
#### instance_variable_set(:name, val)

---

### Active Record Lite

Warmup: How would you define attr_reader?

---

```ruby
def self.my_attr_reader(*method_names)
  # For each method name...
  # define a method with that name that... do
  # grabs the instance variable of that same name.
end
```
---

## Have fun!