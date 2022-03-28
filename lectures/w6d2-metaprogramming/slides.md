# W6D2

## Metaprogramming

![meta](https://camo.githubusercontent.com/fc0bc95605412e5f923c28d379bb8acbf2b0629a1793e59f5c9946cf87557629/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6759357345756a724a624376652f67697068792e676966)

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

![doge](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/sql/w6d2-metaprogramming/meta-doge.jpg?token=GHSAT0AAAAAABJGL7CDPB2NXCLFBC5Z6YFKYSLDY4A)

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

Let's walk through some demos!