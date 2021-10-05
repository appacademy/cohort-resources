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

![doge](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/sql/w6d2-metaprogramming/meta-doge.jpg?token=AQCB66LTEQ4A6LKKAZHKK53BMS2OW)

---

## Agenda

* What is metaprogramming?
* Brief overview of `send`, `define_method`, and `method_missing`
* Demo
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

* Examples: 
  * `attr_reader`/`attr_writer`
  * `belongs_to`/`has_many`
  * `validates` 
  
Note:
- the extent of the lecture will be to explore a small collection of methods used in metaprogramming
- students are encouraged to explore and play around with things that we don't get to in lecture

---

### What is Metaprogramming?

* In practice, metaprogramming in Ruby makes use of a collection of methods to help the developer define behavior (such as other methods!)
* Today we'll explore just a small sample of those methods
* You may have unanswered questions or want to explore more on your own later

---

### `send`, `define_method`, `method_missing`

---

### `send`

- more flexible way to invoke a method - `obj.send(method_name, args)`
- _dynamic dispatch_ - call a method from a variable name
- also works on operations (`*`, `+`, `-`, etc.)
- works on private methods even from outside the class
```ruby
class Person
  attr_accessor :name, :age, :height
  def initialize(args)
    args.each{ |k, v| self.send("#{key}=", value) }
  end
end

chris = Person.new({ name: "Chris", age: 26, height: "6'1" })
```

---

### `define_method`

```ruby
Class Batch 
  STATES = ['drafted', 'emailed', 'approved']

  attr_accessor :status

  STATES.each do |method_name|
    define_method("#{method_name}?") do
      status == method_name
    end
  end
end

batch.drafted? # returns true or false
batch.emailed? # returns true or false
batch.approved? # returns true or false

```

---

### `define_singleton_method`

- like `define_method`, but makes a class method
```
ClassName.define_singleton_method(:method_name, args) do |method_name, args|
	...
end
```

---

### `method_missing`

```
class Foo
  def method_missing(method_name, *arguments, &block)
    # the parameters are provided for your use
    puts "I could have implemented #{method_name}"
  end
end

foo = Foo.new
foo.do_something # => "I could have implemented do_something"
```
---

Let's walk through some demos!