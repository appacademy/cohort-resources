class Array
  def my_each(&prc)
    i = 0

    while i < self.length
      prc.call(self[i])
      i += 1
    end

    self
  end
end

arr = [1,2,3,4,5]
arr.my_each {|ele| p ele*2}