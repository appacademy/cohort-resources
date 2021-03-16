require "byebug"

def is_prime?(number)
    return false if number < 2
    (2...number).each do |factor|
        return false if number % factor == 0
    end
    true
end

def first_n_primes(num_primes)
    primes = []
    num = 2
    debugger
    while primes.length < num_primes
        primes << num if is_prime?(num)
        num += 1
    end
    debugger
    primes 
end

p first_n_primes(5)  #= [2, 3, 5, 7, 11]