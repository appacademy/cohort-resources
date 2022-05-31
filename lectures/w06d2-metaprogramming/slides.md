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

![doge](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/sql/w6d2-metaprogramming/meta-doge.jpg?token=GHSAT0AAAAAABUF4E222WVB5WWJW6B4JZXUYUNJ72Q)

---

## Agenda

* What is metaprogramming?
* Metaprogramming demos

---



## What is _programming_?

---

### What is Metaprogramming?

* The essence of programming is defining behaviour
* Metaprogramming is defining behaviour that will define future behaviour

* Often used to dynamically define a suite of similar methods based on undetermined future input to reduce duplicate code

---

### Familiar examples

* `attr_reader`/`attr_writer`
* `belongs_to`/`has_many`
* `validates` 

- the extent of the lecture will be to explore a small collection of methods used in metaprogramming
- you are encouraged to explore and play around with things that we don't get to in lecture

Note:

* In practice, metaprogramming in Ruby makes use of a collection of methods to help the developer define behavior
* Today we'll explore just a small sample of those methods
* You may have unanswered questions or want to explore more on your own later

---

Let's walk through some demos!