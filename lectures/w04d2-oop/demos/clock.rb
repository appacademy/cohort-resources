## functional programming example

sec = 0
min = 0
hrs = 0

def tick(sec, min, hrs)
    sec += 1
    if sec == 60
        sec = 0
        min += 1
    end
    if min == 60
        min = 0 
        hrs += 1
    end
    if hrs == 24
        hrs = 0
    end
    return [sec, min, hrs]
end

def print(sec, min, hrs)
    puts "#{hrs}:#{min}:#{sec}"
end

# while true
#     sleep(1)
#     print(sec, min, hrs)
#     sec, mins, hrs = tick(sec, min, hrs)
# end


# Abstraction

# class Clock
#     attr_accessor :sec, :min, :hrs
#     def initialize
#         @sec = 0
#         @min = 0
#         @hrs = 0
#     end

#     def run
#         while true 
#             sleep(1)
#             tick
#             print
#         end
#     end
    
#     private

#     def tick
#         self.sec += 1
#         increment_min
#         increment_hrs
#     end

#     def print
#         puts "#{self.hrs}:#{self.min}:#{self.sec}"
#     end
    
#     def increment_min
#         if self.sec == 60
#             self.min += 1
#             self.sec = 0 
#         end
#     end

#     def increment_hrs
#         if self.min == 60
#             self.hrs += 1
#             self.min = 0 
#         end
#         if self.hrs == 24
#           self.hrs = 0
#         end
#     end

# end

# Clock.new.run

class Test
  def test_method(other_instance)
      private_method                  # a
      self.private_method             # b
      other_instance.private_method   # c
  end

  private
  def private_method
      puts "This is a private method"
  end
end

a = Test.new
b = Test.new
a.test_method(b)
a.private_method                        # d