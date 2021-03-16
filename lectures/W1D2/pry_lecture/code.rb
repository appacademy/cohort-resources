greens = ["kale", "spinach", "arugula"]

def is_prime?(num)
  (2...num).each do |factor|
    return false if num % factor == 0
  end

  num > 1
end

