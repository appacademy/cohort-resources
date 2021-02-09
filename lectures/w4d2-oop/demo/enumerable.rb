module MyEnumerable

  def my_any(&prc)
    self.my_each do |el|
      return true if prc.call(el)
    end
    false
  end

  def my_each(&prc)
    raise "Including class needs a my_each method!"
  end

end

include MyEnumerable

my_any { |animal| animal.name == "Boxer" }
