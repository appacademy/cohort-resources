require 'byebug'

Object.class_eval do 
    def my_attr_accessor(*args)
        debugger
        args.each do |attr|
            string_to_eval = <<-TEXT
                def #{attr}
                    puts "beep boop"
                    @#{attr}
                end    

                def #{attr}=(val)
                    puts "boop beep"
                    @#{attr} = val
                end
            TEXT
            class_eval(string_to_eval)
        end
    end
end