# Intro to RSpec & Test-Driven Development

---
# Congrats!

![minions](https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif)

+ In less than 2 weeks, we've gone through:
  + Recursion
  + Git
  + Data Structures
  + OOP
  
---
# Lecture Objectives

+ Why do we test?
+ What is TDD?
+ What is the testing pyramid?
+ Be familiar with the RSpec library

---

# Lecture Outline

+ TDD Overview
+ RSpec & TDD Demo
+ Review
+ Quiz

---

# Hack Academy Entries

---

# TDD Overview

+ Why do we test?
+ What is TDD?
+ How do we test?
+ What do we test?

---

# *Why* do we test?

---

# Motivations

+ Checks if it works
+ Increase flexibility / reduce fear of change or refactor
+ Very conducive to collaboration
+ Produce documentation


---

# What is TDD?

`TDD`: a software development process

+ `RED` - run the tests after writing them
   	- screens for instances of false positives
+ `GREEN` - write minimum amount of code to pass tests
+ `REFACTOR` - make sure it's up to par with your company's style guide


---

# TDD Benefits

+ Writing code that passes tests becomes easy
  + You just wrote the test
+ Only write code that is required
+ Enforces modularity
  + testing suites will help monitor the app piece by piece
+ Code is *__read__* more than it's *__written__*
  + Write your code to be understood and handled by others as well

---

# *What* do we test?

---

![testing-pyramid](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)

---

# RSpec

+ Domain-Specific Language (DSL) written in Ruby for Ruby
+ Meta-gem that includes `rspec-core`, `rspec-expectations` and `rspec-mocks`
+ Not the only Ruby testing library (others include `Minitest` and `Cucumber`).

---

# RSpec Demo

+ Setup
+ Structure
+ Syntax
   + `describe`, `context`
   + `it`
   + `expect`
   + `before`
   + `subject`
   + `let`

---

## Review

+ TDD workflow: red, green refactor
+ RSpec syntax:
  + Structure
    + `describe`, `context`
    + `it`
  + Variables
    + `subject`
    + `let`
  + Macros
    + `before`
+ Documentation, documentation, documentation!
+ BONUS: http://www.betterspecs.org/

---

+ [Resource](https://github.com/appacademy/cohort-resources/tree/master/study_guides/rspec) for base setup of RSpec

---
# Thank you!

## Now let's go write some tests!
![](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

