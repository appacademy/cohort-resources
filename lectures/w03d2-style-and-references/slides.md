# W3D2

## Ruby Style, References, and Scope

---

## Lecture Norms

---

### Slides and Demos

+ All lecture materials can be found in the `2024-01-08` branch of the `cohort-resources` repository on Github
	+ Slides will typically be pushed prior to lecture but demos usually won't be available until afterwards
+ Note that the `master` branch of this repo contains a variety of useful resources that students have aggregated over the years

---

### Typical Lecture Format

+ Learning Objectives
+ Today's Material
	+ Slides
  + Demos
+ Kahoot! Quiz

---

### Participation

* Volunteer to answer questions posed by the lecturer
* Don't be afraid of saying the wrong thing

---

## Let's get started

---

## Learning Objectives

+ Review proper Ruby Styling
+ Describe the differences between variables/references and actual Ruby objects
+ Identify whether an operation mutates an object or reassigns a variable reference
+ Given a code snippet, determine which variables are in scope
+ Properly initialize a `Hash` and `Array` with default values

---

## Ruby Style Review

---

### Guidelines 

+ Style is an essential, oft-overlooked part of coding
	+ During interviews, especially, poor style indicates a lack of experience
+ Well-written Ruby code should **read like English**

---

## Rules

---

### Casing

```ruby 
  variable_names = 🐍 "snake_case" 
  ClassNames = 🐫 "UpperCamelCase" aka "PascalCase" 
  CONSTANTS = 😱 🐍"SCREAMING_SNAKE_AHHHH!" 
```

---

### Conditionals

```ruby 
  if truthy_thing? 
    # multiple 
    # lines 
  end 
  puts "truthy!" if truthy_thing? # single line! 
```

Note:
- mention if/unless and while/until

---

### Line Length

```ruby 
rant = "You could write really, really, really long lines in Ruby but that is bad code style should be avoided.  Do not have more than 80 characters on one line." 
```
---

### Interpolation

```ruby 
  name = "Markov" 
  puts "Why, hello there " + name + ", have a lovely day!" 
  puts "Why, hello there #{name}, have a lovely day!" 
```

---

### Method Names

```ruby 
  "abc".upcase! 
  [1, 2, 3].reverse! 
  5.even? 
  "abc".is_a?(String) 
```

---

### Block Parameters

More explicit: 
```ruby 
  def do_the_thing(x, &prc) 
      prc.call(x) 
  end 
``` 

Less explicit: 
```ruby 
  def do_the_thing(x) 
      yield(x) 
  end 
```

---

### Spacing and Indentation

```rb 
def my_function 
system("clear") 
puts "Let's do this thing!" 
loop do 
arr = [] 
until arr.length == 6 
until letter 
letter = gets.chomp 
if not_valid?(letter) 
puts "Wrong." 
letter = nil 
end 
arr << letter 
end 
end 
puts "The result is: #{arr}" 
end 
``` 

---

```rb 
def my_function 
  system("clear") 
  puts "Let's do this thing!" 
   
  loop do 
    arr = [] 
    until arr.length == 6 
      until letter 
        letter = gets.chomp 
        if not_valid?(letter) 
           puts "Wrong." 
           letter = nil 
        end 
      arr << letter 
    end 
  end 
  puts "The result is: #{arr}" 
end 
```

---

### Variable Names

Exhibit A: 
```rb 
def do_something(f, s) 
  x = nil 
  until x == s 
    x = @y.z(f) 
    a(x) unless v?(x) 
    x = nil 
  end 
  puts "Congratulations!" 
end 
```

---

Exhibit B:
```rb
def do_something(prompt, answer)
  input = nil
  until input == answer
    input = @current_player.guess(prompt)
    unless valid_guess?(input)
      alert_invalid_guess(input) 
      input = nil
    end
  end
  puts "Congratulations!"
end
```

Note:
- the most common exception to this is loop iterators

---

## References

+ Note that this topic can be a very deep rabbit hole and we will gloss over topics such as memory allocation and garbage collection

---

### Variables

+ Ruby variables hold *references* (otherwise known as *pointers*) to objects stored in memory
+ `=` assignment operator
  + _assigns_ the variable pointer
  + doesn't change or *mutate* the object stored in memory

---

### Mutability

+ Mutable: state can be modified after it is created
+ Immutable: state cannot be modified after it is created

| Mutable  | Immutable   |
|----------|-------------|
| `String` | `Integer`   |
| `Array`  | `Float`     |
| `Hash`   | `Symbol`    |

---

## Reference Diagram + Demo

---

### What's the difference

* `<<`
* `concat`
* `+=`

---

## Scope

---

## Different kinds of variables
* **Local variables**
* Global Variables
* Instance variables
* Class Variables

---

### Block Scoping (of local variables)

* Inside of a `do..end` block, you have access to all variables declared previously (higher) in your code and at the same or an outer-level scope.
* Variables *declared* within a block, are not accessible to the outer scope
  * However, if a variable is declared in outer-level scope, *changes* made to variable in inner-level scope persist when back at outer-level.

---

## Examples

---

```rb
x = 2

3.times do
  x *= 2
end

puts x
```

---

```rb
3.times do
  x = 2
end

puts x
```

---

### Scope "Gates"

Parts of Ruby code in which an *entirely* new scope is created and all local variables previously defined are no longer accessible (i.e. you do not have access to local variables defined in outer scopes). The three main scope gates are:
1. Method definitions
2. Class definitions
3. Module definitions

---

## Examples

---

```rb
x = 10

def some_method
  puts x
end

some_method
```

---

## Parameters vs Arguments

* **Parameter** - variable in a method _definition_
* **Argument** - variable method is _invoked_ with

---

## Passing arguments to methods

* In the scope of a method, the parameter is a copy of the argument that the method was invoked with - both are references
  * In essence another reference is created, that points to the same spot in memory as the argument passed in
* Therefore if we _reassign_ the parameter within the method, the argument that the method was invoked with is unaffected
* But if we _mutate_ the parameter within the method, this affects the argument the method was invoked with (since it is pointing to the same object)

---

### What do you think this code will output?

```rb
def inc(num)
  num += 1
end

a = 1
inc(a)

puts a
```

---

### How about this?

```rb
def add_square(arr, num)
  arr << (num ** 2)
end

squares = [1, 4, 9]
add_square(squares, 4)

p squares
```

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=5ad379b2-90e6-405f-bb15-e2b854a4c9dc)

---

## Array/Hash Defaults

---

### Making Array of Arrays

* Naive Approach: `Array.new(3, [])`
* Correct Approach(es): `Array.new(3) { [] }` || `Array.new(3) { Array.new }`

---

### Making Hash with Array default

* Naive Approach 1: `Hash.new([])`: The default could be mutated!
* Naive Approach 2: `Hash.new { [] }`: does not store keys into the hash!
* Correct Approach: `Hash.new { |h, k| h[k] = [] }`

---

### Creating a Counter Hash
* `Hash.new(0)`: works fine because we can't mutate Integers

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=14eb8cff-210c-4522-aa4c-5bb4aa9ee86b)

---

## Thank You!