## W3D2
# References & Scope

---

## Lecture Norms

---

### Lecture Slides

+ All lecture slides, demos, and additional resources can be found in the `cohort-resources` repository
  + Every cohort has their own branch - ours is `09-11-2023`

---

### Lecture Format

+ Learning Objectives
+ Technical Content
  + Slides
  + Demo
+ Kahoot! Quiz

---

### Participation

+ Don't be afraid of saying the wrong thing

---

## Learning Objectives

+ Review proper Ruby styling conventions
+ Describe the differences between references and objects
+ Identify whether an operation mutates or reassigns
+ Given a code snippet, determine which variables are in scope
+ Properly initialize a `Hash` and `Array` with default values

---

## Ruby Style

+ Writing clean code is an essential skill, but style can be subjective
+ Good ruby code should **read like English**

---

### Rules

#### Snake, pascal case, screaming snake in Ruby

```ruby 
  variable_names = 🐍 "snake_case" 
  ClassNames = 🐫 "UpperCamelCase" aka "PascalCase" 
  CONSTANTS = 😱 🐍"SCREAMING_SNAKE_AHHHH!" 
```

---

#### single line `if` / `unless` 
```ruby 
  if truthy_thing? 
    # multiple 
    # lines 
  end 
  puts "truthy!" if truthy_thing? # single line! 
```

---

#### 80 character limit for lines 

```ruby 
rant = "You could write really, really, really long lines in Ruby but that is bad code style should be avoided.  Do not have more than 80 characters on one line." 
```
---

#### Interpolation > Concatenation 

```ruby 
  name = "Markov" 
  puts "Why, hello there " + name + ", have a lovely day!" 
  puts "Why, hello there #{name}, have a lovely day!" 
```

---

#### Use `!` for mutating methods, `?` for boolean methods 
```ruby 
  "abc".upcase! 
  [1, 2, 3].reverse! 
  5.even? 
  "abc".is_a?(String) 
```

---

#### Prefer block parameters over `yield` 

```ruby 
  def do_the_thing(x, &prc) 
      prc.call(x) 
  end 

  #def do_the_thing(x) 
  #    yield(x) 
  #end 
```

---

#### Use proper spacing and indentation

```rb 
def my_function 
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
end 
``` 

---

```rb 
def my_function 
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
end 
```

---

#### No one-letter variable names

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

---

## References

---

### Variables

+ Ruby variables are *references* - or *pointers* -  to objects stored in memory
+ `=` is the assignment operator
  + _assigns_ the variable pointer
  + doesn't change or *mutate* the object stored in memory

---

### Mutability

+ Describes whether an object can be modified or not after it is created
  + *Mutable*: can be modified
  + *Immutable*: cannot be modified

| Mutable  | Immutable   |
|----------|-------------|
| `String` | `Integer`   |
| `Array`  | `Float`     |
| `Hash`   | `Symbol`    |

---

### Diagram + Demo

---

### Array Methods Review

+ `<<`
+ `concat`
+ `+=`

---

## Scope

+ Several different kinds of variables
	+ Local variables
	+ Global Variables
	+ Instance variables
	+ Class Variables

---

### Block Scoping

+ A block retains access to all variables declared in the outer scope
+ Variables declared within a block are not accessible to the outer scope
	+ Within a block, however, changes made to variables declared in the outer scope persist

---

### Example #1

```rb
x = 2

3.times do
  x *= 2
end

puts x
```

---

### Example #2

```rb
3.times do
  x = 2
end

puts x
```

---

### Scope Gates

Definitions of the following create a separate isolated scope:

+ Method definitions
+ Class definitions
+ Module definitions

---

### Example #1

```rb
x = 10

def some_method
  puts x
end

some_method
```

---

### Parameters vs Arguments

+ **Parameter**: variable in a method definition
+ **Argument**: variable or value passed into a method on invocation

---

+ On function invocation, parameters take on the value of the arguments
  + Both are references that point to the same location in memory
+ We can thus draw the following conclusions:
	+ Reassigning the parameter has no effect upon the argument
  + Mutating the parameter also mutates the argument

---

### Example #1

```rb
def inc(num)
  num += 1
end

a = 1
inc(a)

puts a
```

---

### Example #2

```rb
def add_square(arr, num)
  arr << (num ** 2)
end

squares = [1, 4, 9]
add_square(squares, 4)

p squares
```

---

## Array/Hash Defaults

---

### Nested Arrays

```ruby
# Naive Approach
Array.new(3, [])

# Correct Approaches
Array.new(3) { [] }
Array.new(3) { Array.new }
```

+ This same principle can and should be applied whenever we are populating default array values with mutable objects

---

### Hashes with Array Values

```ruby
# Naive Approach #1
Hash.new([])

# Naive Approach #2
Hash.new { [] }

# Correct Approach
Hash.new { |h, k| h[k] = [] }
```

+ This same principle can and should be applied whenever we are populating default hash values with mutable objects

---

### Creating a Counter Hash

* `Hash.new(0)`: works fine because we can't mutate Integers

---

## Thank You!