# # No abstraction, bad! 

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


require "byebug"

# Abstraction, good!

class Clock
    attr_accessor :sec, :min, :hrs
    def initialize
        @sec = 0
        @min = 0
        @hrs = 0
    end

    def run
        while true 
            sleep(1)
            tick
            print
        end
    end
    
    private

    def tick
        self.sec += 1
        # seconds = 1
        increment_min
        increment_hrs
    end

    def print
        puts "#{self.hrs}:#{self.min}:#{self.sec}"
    end
    
    def increment_min
        if self.sec == 60
            self.min += 1
            self.sec = 0 
        end
    end

    def increment_hrs
        if self.min == 60
            self.hrs += 1
            self.min = 0 
        end
    end

end

Clock.new.run

# class Test

#     def initialize
#         @name = "test"
#     end

#     def rename(new_name)
#         self.name = new_name
#         debugger
#     end

#     private

#     attr_accessor :name

# end

# a = Test.new
# a.rename("sarah")
# p a