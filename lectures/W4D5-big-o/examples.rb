
def adding_operations
  puts "hello" # 1 operation
  puts "world" # 1 operation
  puts "!"
  # total = 1 + 1 + 1= 2 operations
end

def multiplying_operations
  5.times do # code is in this loop will execute 5 times
    puts "hello world!"  # 1 operation
  end
  # total = 5 * 1 = 5 operations
end

def adding_and_multiplying
  puts "hello" # 1 operation
  (0...10).each do |number|  # code is in this loop will execute 10 times
    puts "hi" # 1 operation
    puts "number" # 1 operation
  end
  # total = 1 + (10 * (1 + 1)) = 1 + (10 * 2) = 1 + 20 = 21 operations
end

