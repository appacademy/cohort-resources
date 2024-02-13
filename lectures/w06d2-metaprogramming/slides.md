# W6D2
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

* `attr_reader`/`attr_writer`/`attr_accessor`
* `belongs_to`/`has_many`
* `validates` 

---

Let's walk through some demos!