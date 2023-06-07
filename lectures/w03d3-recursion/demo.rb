# RUBY_THREAD_VM_STACK_SIZE

def iter_sum(n)
  (0..n).inject { |acc, ele| acc + ele }
end

# p iter_sum(100)

def rec_sum(n)
  return 0 if n == 0
  rec_sum(n-1) + n
end

# p rec_sum(5)

def rec_reverse(str)
  return '' if str.length == 0
  str[-1] + rec_reverse(str[0...-1])
end

# def rec_reverse!(str)
#   return str if str.length == 0

# end

class String
  def rec_reverse
    return '' if self.length == 0
    self[-1] + self[0...-1].rec_reverse
  end
end

# p rec_reverse('hello world') # 'dlrow olleh'
# p rec_reverse('') # ''

FIB_COUNT = Hash.new(0)
def fibs(n, memo = {})
  return 1 if n < 2
  return memo[n] if memo.has_key?(n)
  FIB_COUNT[n] += 1
  memo[n] = fibs(n-2, memo) + fibs(n-1, memo)
  memo[n]
end

# p fibs(5)
p fibs(1000)
p fibs(2000)
# p FIB_COUNT