class Queue
  def initialize
    @line = []
  end

  def [](position)
    @line[position]
  end

  def []=(position, ele)
    @line[position] = ele
  end

  def add(ele)
    @line << ele # add ele to back of line
    nil
  end

  def remove
    @line.shift  # remove front ele of line
  end
end

grocery_checkout = Queue.new
grocery_checkout.add("Alan")
grocery_checkout.add("Alonzo")

# Let's call Queue#[]= without syntactic sugar:
grocery_checkout.[]=(0, "Grace")
p grocery_checkout    #<Queue:0x007fe7a7a29ec8 @line=["Grace", "Alonzo"]>

# Let's call Queue#[]= again, but with syntactic sugar:
grocery_checkout[1] = "Grace"
p grocery_checkout    #<Queue:0x007fe7a7a29ec8 @line=["Grace", "Grace"]>