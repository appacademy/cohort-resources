require_relative "dog"
require_relative "cat"

tom = Cat.new("tom", "grey")
mochi = Dog.new("mochi")
p tom
p mochi
tom.eat("fish")
tom.walk
mochi.walk
mochi.eat('bone')