##Class Instance Variables
* these are not inherited by sub classes
* Any objects can have instance variables of its own
* meaning that a class is an object than the class can have instance variables


## Class variables
* These are inherited by sub classes 
* Pretty rare for when you need to use them 
* You will not need to use them for active record lite

* (Object name).instance_variables will give you all the instance variables for the particular object that you're looking at. This will be returned in an array

* If we want to get a particular instance variable from an object then we say: 
* (Object name).instance_varaible_get(:(nameOfInstanceVariable) )
* Can be a symbol or a string inside of the get but you need to make sure that you must put in the @symbol


* (Object name).instance_varaible_set(:(nameOfInstanceVariable),(value) )
* This will set the values of instance variables.

* You can use the method above to actually create instance variables as well

## send 

* Send allows you to send a method to the receiver.  That's why it is called send.  The object that calls the method is always the receiver. 
* lola.send(:eat) states that we will send the eat method to lola and lola will know to implement that message as long as it is defined as an instance method in the lola class 

* If the method that is being sent to lola has arguments then the first argument is always the name of the method and and arguments after that are arguments that the method that is being sent needs.

* Send Is made for when we want to call methods dynamically

## define_method 
* the block given to a define method is gonna be what the method is gonna do.
* It essentially creates instance methods for an instance.  It is a class method that's why it needs to be within a class method in order for it be called.

* Self inside of the block give to the define method is the instance itself BUT self outside of the block is the class itself 

* The arguments in the pipes of the block are gonna be the arguments that are apart of the method you're defining 

* How can you get a default argument?  You can do it within the pipes in the block