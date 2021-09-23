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
+ Kahoot

---

# Question Guidelines

1. How relevant is it to everyone?
2. Will the answer help today?
3. How much space am I taking?
4. Am I just showing off?


---

# TDD Overview

+ Why do we test?
+ What is TDD?
+ What do we test?
+ How do we test?

---

### Why do we test?

![testing-failures](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w4d4-rspec/importance_of_testing.png?token=AQCB66JF2RR77BCUUZAXXLDBKNSHA)


---

### Why do we test?


+ Checks if our code works!
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

### What is TDD?

![tdd](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/ruby/w4d4-rspec/tdd.png?token=AQCB66KONEQTYSUH7JXSKA3BKNTPY)

---

# TDD Benefits

+ Writing code that passes tests becomes easy
  + You just wrote the test
+ Only write code that is required
  + if it wasn't in your blueprints, *YAGNI*
+ Enforces modularity
  + testing suites will help monitor the app piece by piece
+ Code is *__read__* 10X more than it's *__written__*
  + Write your code to be understood and handled by others as well
  
---

### What do we test?
![testing-pyramid](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)

---

# How do we test?

---

# RSpec

+ Domain-Specific Language (DSL) written in Ruby for Ruby
+ Meta-gem that includes `rspec-core`, `rspec-expectations` and `rspec-mocks`
+ Not the only Ruby testing library (others include `Minitest` and `Cucumber`).

---

# Basic Syntax

```
describe ClassName do
  
  describe "#methodName" do
    it "has a certain result" do
    	obj = ClassName.new(args)
  		obj.methodName(args)
      
		expect(obj.something).to eq(val)
		expect(obj.somethingElse).to be true
     end
    
  end
end
```

---

# Subjects

```
describe ClassName do
  subject(:subj) { ClassName.new(args) }
  
  describe "#methodName" do
    it "has a certain result" do
      subj.methodName(args)
      expect(subj.something).to eq(val)
    end
    
  end
end
```

---
# Context

```
describe "#methodName" do
  context "when some condition is met" do
    it "has a certain result" do
    	subj.methodName(args)
    	expect(subj.something).to eq(val)
    end
  end
  
  context "when some condition is NOT met" do
     it "raises an error" do
    	subj.methodName(args)
    	expect{ subj.something }.to raise_error
    end
  end
end
```

---

# RSpec Demo

+ Setup
+ Structure/Syntax
   + `before`
   + `subject`
   + `let`
   + `describe`, `context`
   + `it`
   + `expect`

---

# Review - TDD

0. RED
0. GREEN
0. REFACTOR

---

# Review - RSpec Syntax

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

# Review - Rspec Matchers
Ex: `expect(dog.name).to eq("Frank")`

+ left side:
   + `expect`
   + `allow`
   + `.to`,
   + `.to_not`, `not_to`


---

# Review - Rspec Matchers
Ex: `expect(dog.name).to eq("Frank")`

+ right side:
   + `eq`, `be`, `exist`, ...
   + `raise_error`, `raise_exception` ...
   + `be_nil`, `true`, `be_truthy`, ...
   + `be_an_instance_of`, `be_a`, ...
   + `change`, `respond_to`, `receive`, ...
   + `have_key`, `include`, `match_array`, `contain_exactly` ...

---

## Review - Mocks and doubles

- fake objects
  - `double`
- Why do we use these in unit tests?

---

# Tips for Today's Projects

0. Follow TDD! RED, GREEN, REFACTOR
0. Only write unit tests
0. Only test public methods (not private or protected)
0. Don't get too crazy with edge cases today
0. Write a few tests, then implement code
0. CONSULT DOCUMENTATION OFTEN

---


# Tips for Today's Projects

+ Documentation, documentation, documentation!
+ BONUS: http://www.betterspecs.org/

---

## [Kahoot!](https://create.kahoot.it/details/w4d4-rspec/c590ac48-6b83-43f1-a51f-91b9bd2ce699)

---

# Thank You!
![coding](https://media.giphy.com/media/vo6h46NUgExPy/giphy.gif)

---