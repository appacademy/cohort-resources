require 'byebug'

class Object
  debugger
  # 1. attr_accessor takes in varying amount of ivars - set up the method as such
  # 2. Need to create getter/setter methods for each ivar
  # 3. Iterate across all the instance variables, creating both a getter and a
  #    setter.
  # Example: attr_accessor_lite :name, :age
  def attr_accessor_lite(*ivars)
    debugger
    # ivars => [:name, :age]
    ivars.each do |ivar|
      debugger
      # ivar => :name
      # define the getter method
      define_method(ivar) do
        debugger
        instance_variable_get("@#{ivar}") # ivar => :name, symbol => :@name
      end

      # define the setter method
      define_method("#{ivar}=") do |val|
        instance_variable_set("@#{ivar}", val)
      end
    end
  end
end