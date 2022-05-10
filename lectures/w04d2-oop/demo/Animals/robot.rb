require_relative "walkable"
require_relative "runnable"

class Robot

  include Walkable
  include Runnable

  attr_reader :name 

  def initialize(name)
    @name = name
  end
end