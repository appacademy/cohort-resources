require "byebug"
# ? Ruby Truthy vs Falsey Values

# Falsey: false, nil
# Truthy: everything else!

# if nil # or false will be falsey 
#   p "it is truthy"
# else
#   p "it is falsey"
# end

# if "string" #or essentially anything else will be truthy
#   p "it is truthy"
# else
#   p "it is falsey"
# end

# ? a || b:
# * when the a is truthy, return a 
# * when a is falsey, return b

# p false || 42 # true 
# p 42 || true # 42
# p false || 42 # 42
# p 42 || false # 42
# p false || "hello" # hello
# p nil || "hello" # hello
# p "hi" || "hello" # hi
# p 0 || true # 0
# p false || nil # nil

def greet(person = nil)
  person = person || "you"
  person ||= "you"

  if person.nil?
    person = "you"
  end

  p "hey" + person
end

# greet
# greet("Jeff")
# greet("Brian")

def call_that_proc(val, &prc)
  prc = prc || Proc.new { |data| data * 2}
  # prc ||= Proc.new { |data| data * 2}
  p prc
end

# call_that_proc("alvin") { |data| data.upcase + "!!!"}
# call_that_proc("simcha")

class Restaurant 
  attr_accessor :name, :chefs

  def initialize(name, chefs)
    @name = name
    @chefs = chefs
  end

  def test
    debugger
    s = "s"
  end

  def menu
    @menu ||= ["samies", "big ol cookies", "bean blankies", "chicky catch", "super water"]
  end
end

# five_star_restaurant = Restaurant.new("Appetizer Academy",["Marta", "Jon", "Soon-Mi"])
# p five_star_restaurant.menu
# p five_star_restaurant
# p five_star_restaurant.menu
# five_star_restaurant.menu << "pizza"
# p five_star_restaurant.menu
# five_star_restaurant.menu = ["carrots"]