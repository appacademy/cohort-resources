require "byebug"
class Dog 
  # ! first block 
  def self.learn_trick(trick)
    debugger
    define_method(trick) do 
      debugger
      puts "#{ @name } is #{ trick }ing"
    end   
  end

  def method_missing(method_name)
    # debugger # if you dont put the require byebug at the top you're going to get a stackoverflow because self.debugger is also trying to find a method among the inheritance chain 
    puts "Sorry, #{ @name } doesn't know how to #{ method_name }"
    puts ". . . but let's give it a try anyways"
    debugger
    self.class.learn_trick(method_name)
    debugger
    self.send(method_name) #we have to use self.send(method_name) because method_name is a symbol
  end

  # ! second block

  # def self.learn_tricks(*tricks)
  #   tricks.each do |trick|
  #     #trick will be the name of method
  #     define_method(trick) do |num_times| 
  #       #whats inside the pipes is the argument to the function you're creating
  #       num_times ||= 1
  #       debugger
  #       num_times.times do 
  #         puts "#{ @name } is #{ trick }ing"
  #       end
  #     end   
  #   end
  # end

  # def method_missing(method_name, arg)
  #   #debugger # if you dont put the require byebug at the top you're going to get a stackoverflow because self.debugger is also trying to find a method among the inheritance chain 
  #   puts "Sorry, #{ @name } doesn't know how to #{ method_name }"
  #   puts ". . . but let's give it a try anyways"
  #   debugger
  #   self.class.learn_tricks(method_name)
  #   self.send(method_name, arg)
  # end


  def initialize(name, age)
    @name = name
    @age = age
  end

end 

# ? dog learns one trick
obi = Dog.new("Obi", 8)
obi.bark
# obi.move

# ? dog learns multiple tricks
# Dog.learn_tricks(:fetch, :bark, :sit)
# obi = Dog.new("Obi", 8)
# obi.fetch(1)
# obi.bark(2)
# obi.sit(1)

