## Class Instance Variables
* these are not inherited by sub classes
* Any objects can have instance variables of its own
* since a class is an object than the class can have instance variables

```ruby
 def self.record_dog_birth
    @dog_count ||= 0
    @dog_count += 1
  end
```

* These instance variables are class instance variables since they are being declared within a class method. This can be done because everything in ruby is an object and therefore anything can have instance variables. 

## Class variables
* These are inherited by sub classes 
* Pretty rare for when you need to use them 
* You will not need to use them for active record lite

* ```<Object_name>.instance_variables``` will give you all the instance variables for the particular object that you're looking at. This will be returned in an array

* If we want to get a particular instance variable from an object then we say: 
```<Object_name>.instance_variable_get(:<nameOfInstanceVariable> )```
  * Can be a symbol or a string inside of the get but you need to make sure that you must put in the '@' symbol

```<Object_name>.instance_varaible_set(:<nameOfInstanceVariable>,<value> )```
* This will set the values of instance variables.
  * You can use the method above to create instance variables as well

## send 

* Send allows you to send a method to the receiver. The object that calls the method is always the receiver. 
* ```lola.send(:eat)``` states that we will send the eat method to lola and lola will know to implement that message as long as it is defined as an instance method in the lola class 

* If the method that is being sent to lola has arguments then the first argument is always the name of the method and and arguments after that are arguments that the method that is being sent needs.

* Send is made for when we want to call methods dynamically

## define_method 
```ruby
def self.learn_tricks(*tricks)
    tricks.each do |trick|
      define_method(trick) do |num_times = 1|
        num_times.times do 
          puts "#{@name} is #{trick}ing"
        end
      end
    end
  end
```
* The block given to a define method is going be what the method is going to do.
* In the example above, the method 'trick' is going to take in an argument num_times that will print out the name of the method a number of times equal to 'num_times'
* The arguments in the pipes of the block are gonna be the arguments variables of the method you're defining 
* define_method creates instance methods for an instance. since it is a class method we are able to call it implicitly without having an explicit receiver.  if we wanted to have an explicit receiver we would say self.define_method.  Since we are within a class method self is referring to the class and not an instance of the class.  
* self inside of the block given to the define method is the instance itself BUT self outside of the block is the class itself.  This is because define method creates instance methods and therefore when we place a self inside we are able to see that self refers to an instance.

