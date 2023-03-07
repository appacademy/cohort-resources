# W6D2

## Metaprogramming

![so-meta](https://media.giphy.com/media/gY5sEujrJbCve/giphy.gif)

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

* Metaprogramming
* Demos

---

## What is Metaprogramming?

* What is _programming_?

---

### Metaprogramming

* The essence of programming is defining behavior
* Metaprogramming is defining behaviour that will define future behaviour

---

### Metaprogramming

* Often used to dynamically define a suite of similar methods based on undetermined future input to reduce duplicate code

Examples:

* `attr_reader`/`attr_writer`
* `belongs_to`/`has_many`
* `validates`

Note:

- the extent of the lecture will be to explore a small collection of methods used in metaprogramming
- students are encouraged to explore and play around with things that we don't get to in lecture

---

### Metaprogramming

* In practice, metaprogramming in Ruby makes use of a collection of methods to help the developer define behavior
* Today we'll explore just a small sample of those methods
* You may have unanswered questions or want to explore more on your own later

---

Let's walk through some demos!