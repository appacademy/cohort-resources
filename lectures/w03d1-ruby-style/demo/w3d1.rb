require 'byebug'

class Array
  def my_each_block(&prc)
    i = 0
    while i < self.length # length of the array that the method is being called on
      prc.call(self[i])
      # yield self[i]
      i += 1
    end
    self
  end

  def my_each_proc(prc)
    # debugger
    # i = 0
    # while i < self.length
    #   prc.call(self[i])
    #   i += 1
    # end
    # self
    # (0...self.length).each {|i| prc.call(self[i])} # this will work except for returning self
    self.my_each_block(&prc)
    
  end
end

arr = [1,2,3]
# arr.my_each_block { |el| p el * 2}
# arr.my_each_block
# proc_example = Proc.new { |el| p el * 2 }
# arr.my_each_proc(proc_example) 




class Fish
  @@all_fish = []
  # attr_reader :name
  # attr_writer :name
  attr_accessor :name

  def self.all_fish
    @@all_fish
  end
  
  def self.random_state_of_being
    [true, false].sample # randomly return true or false from this array if it was this long it would be too long
  end

  # factory method
  def self.make_nemo
    puts self # returns class
    Fish.new("nemo", self.random_state_of_being)
  end

  # another factory method for making random fish
  def self.make_random_fish
    # make random name
    name = ""
    5.times do
      name << ('a'..'z').to_a.sample
    end
    self.new(name, self.random_state_of_being) # I can say self instead of Fish, because self is Fish
  end

  def initialize(name, lost)
    # puts self
    @name = name
    @lost = lost

    @@all_fish << self # remember that self is the instance we are creating
  end

  # def name
  #   @name
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

  def lost?
    @lost
  end

  def find
    @lost = false
  end

end