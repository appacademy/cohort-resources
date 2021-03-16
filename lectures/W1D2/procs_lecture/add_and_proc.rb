def add_and_proc(num_1, num_2, &prc)
    sum = num_1 + num_2
    prc.call(sum)
end

# doubler = Proc.new { |num| num * 2 }
# p add_and_proc(2, 3, doubler)


negate = Proc.new { |num| num * -1}
p add_and_proc(6, 3, negate)

# p add_and_proc(2, 3) { |num| num * 2 }