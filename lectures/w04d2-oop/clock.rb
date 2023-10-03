# Example of functional programming
# Variables + functions that operate on those variables all mixed up

# sec = 0
# min = 0
# hrs = 0

# def tick(sec, min, hrs)
#     sec += 1
#     if sec == 60
#         sec = 0
#         min += 1
#     end
#     if min == 60
#         min = 0 
#         hrs += 1
#     end
#     hrs = 0
#     return [sec, min, hrs]
# end

# def print(sec, min, hrs)
#     puts "#{hrs}:#{min}:#{sec}"
# end

# while true
#     sleep(1)
#     print(sec, min, hrs)
#     new_time = tick(sec, min, hrs)
#     sec = new_time[0]
#     mins = new_time[1]
#     hrs = new_time[2]
# end

# Example of OOP
# takes advantage of abstraction and encapsulation

class Clock
  attr_reader :hr, :min, :sec

  def initialize(hr=0, min=0, sec=0)
    @hr = hr
    @min = min
    @sec = sec
  end

  def run
    loop do
      sleep(1)
      tick
      self.print
    end
  end

  # User doesn't need access to these helper methods
  private
  def tick
    @sec += 1
    if sec == 60
      @min += 1
      @sec = 0
      if min == 60
        @hr += 1
        @min = 0
        if hr == 24
          @hr = 0
        end
      end
    end
  end

  def print
    puts "#{hr}:#{min}:#{sec}"
  end
end

# new_clock = Clock.new(23,59,47).run
another_new_clock = Clock.new(7,59,47)
another_new_clock.tick
another_new_clock.print