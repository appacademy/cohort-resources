# Intro to RSpec & Test-Driven Development

---

# Lecture Objectives

+ Why do we test?
+ What is TDD?
+ What is the testing pyramid?
+ Be familiar with the RSpec library


---

# Question Guidelines

1. How relevant is it to everyone?
2. Will the answer help today?
3. How much space am I taking?


---

# Yesterday's Solutions

+ Hack Academy

---
# Automated testing 


Note:

Thus far in our programs, the way we would figure out whether a method was working in the way we intended it to work was to test it out by hand in pry or debugger or with a script. This can be tedious, repetitive, and worst of all, it is a method vulnerable to both false positives and false negatives. A testing method you can't trust is no testing method at all.

Enter automated testing.

Programmers realized that this state of testing was a serious problem in the development of complex applications and various means of automated testing were developed to speed and smooth the testing process. The general idea across all testing frameworks was to allow developers to write code that would specify the behavior of a method or module or class. Developers could then simply run the test code against their application code and have confidence that their code worked as intended.

Joy to the world.
---

# Why do we test? 

+ To make sure it works
+ Increase flexibility and reduce fear 
+ Make collaboration easier


Note: 

Testing may seem like a drag at first, but you'll grow to love it - especially when we start working on bigger projects! Here's why:
- Tests help us know that the code we write works. Definitely don't want to push a broken update!
- Tests help us refactor with confidence. No need to worry that a fancy new line of code is going to break your whole project.
- Tests help us document our code. Don't know what a method is supposed to do? Check out the tests.

- Testing helps us get jobs! Employers want to see that we care about the quality of our code and will make responsible contributions to their codebase.


To make sure the thing works


Increase flexibility & reduce fear (of code)

You've written a whole bunch of functionality, multiple other developers have worked on the code, you're deep into the project... And then you realize you have to refactor big chunks of it. Without automated tests, you'll be walking on eggshells, frightened of the codebase and the various landmines that are surely lying in wait.

With tests, you can aggressively refactor with confidence. If anything breaks, you'll know. And you'll know exactly what the expectations are for the module you're refactoring, so as long as it meets the specs, you're good.

Make collaboration easier

If the tests are written well, the tests can serve as documentation for the codebase. Need to know what such and such module does? Check out the specs. This is related to easing collaboration.

---
# What is TDD?

+ Test Driven Development 
+ Write tests first, then code ! 
+ Red, Green, Refactor

Note:
A common development process is to write the application code and then later develop some test coverage on important parts of that code. Test-driven development reverses that process and dictates that tests, not application code, should be written first, and then application code should only be written to pass already written specs.
Encourages a focus on modularity because the developer is forced to think about the application in small, testable chunks

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

# Review

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

---



+ Documentation, documentation, documentation!
+ BONUS: http://www.betterspecs.org/

---
## [Kahoot!](https://create.kahoot.it/details/w4d4-rspec/c590ac48-6b83-43f1-a51f-91b9bd2ce699)