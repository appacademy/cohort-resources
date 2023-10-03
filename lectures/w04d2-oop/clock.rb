No abstraction, bad! 

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
    hrs = 0
    return [sec, min, hrs]
end

def print(sec, min, hrs)
    puts "#{hrs}:#{min}:#{sec}"
end

while true
    sleep(1)
    print(sec, min, hrs)
    new_time = tick(sec, min, hrs)
    sec = new_time[0]
    mins = new_time[1]
    hrs = new_time[2]
end