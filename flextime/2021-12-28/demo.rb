#blocks demo

array = ["hello", "goodbye"]

array.map do |word|
  word.upcase
end
array.map{|word| word.upcase}
array.map(&:upcase)



#procs demo

def add_and_proc(num_1, num_2, prc)
  sum = num_1 + num_2
  prc.call(sum)
end

doubler = Proc.new {|num| num * 2}
trippler = Proc.new {|num| num * 3}
add_and_proc(1, 2, trippler)


#procify demo / method with block parameter


def add_and_proc(num_1, num_2, &prc)
  sum = num_1 + num_2
  prc.call(sum)
end


add_and_proc(1, 2) {|num| num * 2}


