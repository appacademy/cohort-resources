# W6D2 - Metaprogramming

---

![so-meta](https://media.giphy.com/media/gY5sEujrJbCve/giphy.gif)

---

## Roadmap

* Ruby
* SQL <<-- Here!
* Rails / CSS
* Js
* React

---

## Learning Goals

* Know what metaprogramming is
* Metaprogramming constructs
  * `self`
  * `define_method`
  * `method_missing`

Note:

* Today our goal is to better understand metaprogramming
  * We are simply trying to get an understanding of what it is, DEFINITELY not master it
  * There will likely be many things you think about wanting to try or figure out the answer to
    * We will try to cover some of them in lecture but I'd encourage you to check out and play around with it on your own as well

---

## Agenda

* Brief Overview
* Introspection 🔎
* attr_accessor_lite
* method missing / define_method / send code demo
* instance variables code demo

---

## Metaprogramming

* When programs program other programs?
  * WAT

Note:

* Metaprogramming is a collection of down to earth pragmatic techniques.
* Let's's talk about some examples

---

## Uses for Metaprogramming

1. Wrapper for external services
2. Create your own language (DSL)... RSpec?
3. Aggressively remove duplicated code
4. Stretch and twist Ruby to your own specific needs

Note:

* A good example is when you don't have access to a service but you want to use it, you could crate a wrapper
  * For example, GitHub
* You may want to create your own language
  * RSpec is DSL because it is based around Ruby but serves a different purpose (testing)
  * They didn't have to invite literally a new language but instead used metaprogram to create a language out of another language
* Simply to remove duplicated code that's all over the place
* Or to learn how you can get everything possible out of Ruby and use it to your advantage

---

![rspec-meta](https://i.imgur.com/uCLocex.png)

Note: 

+ https://github.com/rspec/rspec-core/blob/v3.1.4/lib/rspec/core/example_group.rb

---

## A better definition

When a program _dynamically_ alters itself at runtime.

Note:

* Why does this matter? What does it mean?
* Before we can understand this we need to understand how programs work

---

## Some background

* Interpreted vs. Compiled Languages
  * Interpreted (usually)
    * Ruby
    * Python
    * JavaScript
  * Compiled (usually)
    * C++
    * Java

* Metaprogramming is how a lot of "Ruby magic" works under the hood.

Note:

* You have your source code and that file, that code, is simply read by someone (aka analyzed by another program) and it's going to be executed
  * There's nothing in the middle
* You have your source code, it first must be compiled (turned into machine code with instructions, memory addresses, etc.) and the result of this is what gets executed
  * There _is_ something in the middle

---

## Interpreted vs. Compiled Summary

* Interpreted languages generally allow for more flexibility and "metaprogramming magic"
  * `+` could be interpreted as an `add(a,b)` function 
* Compiled languages are often faster and less ambiguous and fewer moving parts. The code will compile to machine code.
  * `+` could be interpreted as `ADD` in machine code.

Note:

* In summary, interpreted languages like Ruby and JS allow for more flexibility and the metaprogramming magic we are starting to become familiar with
* You might ask, well then why aren't all languages interpreted?
  * And one of the main reasons for this is because it is faster and have less moving parts
---
## Language constructs

* Think of your source code as a world of citizens: variables, classes, methods, procs, lambdas, etc., we will call these **language constructs**.

Note:

* Let's's talk about an example of this before we move into our first code demo.
* Read the slide above then go to the next slide
---
## Language constructs (contd.)

* Interpreted language == busy marketplace
* Compiled language == ghost town

Note:

* In many compiled programming languages, these language constructs behave more like ghosts rather than fully fledged citizens, why? Because you can see them in your source code, but they disappear before the program runs.
  * Compiled languages, pardon the expression, compile, the code and produce an output file, at that point in time, language constructs have lost their concreteness, they are just memory locations.
  * You can't ask for instance methods, because at that point of time the class has just faded away, in languages like C++, runtime is an eerily quiet place, like a ghost town.
* In languages like Ruby on the other hand, runtime is more like a busy marketplace, most language constructs are still there, buzzing, playing and hanging around.
  * You can even ask the citizens about themselves, this is what we call introspection.
    * We are going to dig a little deeper on this topic in just a second
      * That being said, C++ and Java also provides some degree of introspection., but not nearly to the level of interpreted languages

---

## Introspection

![you-pass-the-butter](https://media.giphy.com/media/DyO961yNvBz3i/giphy.gif)

---

## Introspection continued

* Introspection - the program can examine information about itself while it's running instead of just at compile time.

* Examples of methods that use introspection in Ruby:
  * `self`
  * `Object#class`
  * `Class#superclass`
  * `Module#ancestors`
  * `Object#methods`
  * `Module::instance_methods`
  * `Object#is_a?`
    * `Object.kind_of?  ¯\_(ツ)_/¯`
* In languages like C, variable and function names are lost when translated to machine code.
* Languages like C++ and Java provide minimal introspection (i.e. asking for a class name)

Note:

* Read the definition and then walk through the example methods, briefly hitting on each one does

---

## Introspection Code Demo

Note:

* After the demo is over:
  * Ruby's nature as an interpreted language is precisely why it lends itself to metaprogramming. Everything is available at runtime and can always be changed - classes, instance variables, etc.

---

## Evaluation like constructs

* `eval` and friends
  * `Kernel#eval`
  * `Object#instance_eval`
    * creates instance methods for the Object calling it 
  * `Module::class_eval`
    * creates instance methods for instances of the object calling it
    * `Module::module_eval ¯\_(ツ)_/¯`
      * adds methods to a module
* Use cases: executing code from a file, user input, etc.

Note:

* Before we go further, let's discuss some new ways to execute code
* There is a method called `eval` that we have available to us that will evaluate any code that we pass it
* We also have the ability to be more specific using `instance_eval` and `class_eval`
  * And technically even `module_eval`
* This might seem a little funny doing it in `pry` since we can just type the code into `pry` anyways but this can be extremely helpful when we want to run code from a file or ask the user what code they would like to execute

---
### eval

* `eval`: executes code
* `class_eval`: reopens up the receiver and adds instance methods
---

## attr_accessor_lite Demo

Note:

* We are now going to use this knowledge to write a little `attr_accessor_lite`
* Remember that when we use an `attr_accessor` it gives us *methods* for reading and writing
* We will be looking at 2 ways to do this.

---

## Dynamic Dispatch & Methods

* `Module#define_method`
* `Object#send`

Note:

* There are two more dynamic methods that we need to checkout before Today's project
* We're going to talk about them in the next two slides
---

## define_method

* Syntax: `Module#define_method(:name) { |*args| code }`
* Result: defines instance method with given name, input and code
* Known as a **macro**: a class method that defines methods on an instance
  * Examples: `attr_accessor` and `belongs_to/has_many`
* Call within class scope

Note:

* The second one is `Module#define_method`
  * Very similar to just using normal method definition (i.e. `def / end`)

---
## send

* Syntax: `<Object.send(<method name>, *args)`
* Result: dynamically calls method on object
* The method name can be a `String` or `Symbol`
* Method can also be private, even from outside the class definition

Note:

* The first one is `Object#send`
* The use of `Object#send` is called dynamic dispatch because at runtime we can call arbitrary methods
* It sends a message to an object instance and its ancestors in class hierarchy until some method reacts (because its name matches the first argument)
* Note that `send` bypasses visibility checks, so you can call private methods too (useful for unit testing)
* For helpful approach to send: [credit](https://stackoverflow.com/questions/3337285/what-does-send-do-in-ruby)
---
## method_missing (Ghost Methods 👻)

* Called whenever Ruby cannot find a method in the ancestors chain.
* Syntax: `method_missing(name, *args) { code }`
* Result: overwrites `BasicObject#method_missing` to dynamically handle certain method calls
  * have a conditional that will do something if the method name is what you expect
  * else call `super`

Note:

* There is another amazing method that we have available to us, a ghost method, to be specific
  * It's called `method_missing`
* It's called whenever Ruby can't find a method in the ancestors chain
  * It is defined on the highest possible class (BasicObject)
* It's very convenient way to be able to dynamically handle certain method calls
* Here we can see the syntax for it
* We could override it in one of our classes and check if they call a specific method (that isn't defined), else call `super` and it'll use `BasicObject#method_missing`, continuing to do what it would normally do
  * The overriding of method_missing is also called Dynamic Proxy.
---

# method missing/ define_method/ send code demo

---

### Instance Variables

* @@var 
  * class variables which are inherited by descendants 
* @var 
  * These are not inherited by descendants 
  * Since everything is an object in ruby (even classes) then they can also have instance variables
* Syntax
  * `instance_variable_get(:@name)`
  * `instance_variable_set(:@name, value)`

Note:

* Side Note
  * instance variables are for one instance of a class
  * Class instance variables are for the class, but are not inherited by descendants
  * Class variables `@@var`, are inherited from superclass

* We also have the ability to use two methods to get and set the value of our instance variables
  * The first one being `instance_variable_get` that takes the instance variable name as a symbol
    * **important** the `@` is **required**
  * The second one being `instance_variable_set` that takes the instance variable name as a symbol and the value you'd like to set it equal to
* Remember that instance variables as for a single instance, other instances don't share instance variables with one another
* Additionally, class instance variables are for the class and **not** inherited by descendants
* On the other hand, class variables are referenced with two `@` symbols and **are** inherited from superclass
* You really shouldn't be using class instance variables or class variables very often

---
# Instance Variables Code Demo
---

## Pros of Metaprogramming

* Powerful if you know what you're doing
* Get more done with less code
* Flexible

---

## Cons of Metaprogramming

* Dangerous if you don't know what you're doing
* Confusing, less readable

---

## The Takeaway

* Don't use it unless you have to!

---

## Today's Projects

* [ActiveRecord Lite](https://github.com/appacademy/curriculum/tree/master/sql/projects/active_record_lite)

---

![bye-corgi](https://media.giphy.com/media/Wj7lNjMNDxSmc/giphy.gif)

---