class Test
    def test_method(other_instance)
        public_method                   # a
        self.public_method              # b
        other_instance.public_method    # c
    end

    def public_method
        puts "This is a public method"
    end
end
# a = Test.new
# b = Test.new
# a.test_method(b)
# a.public_method                         # d
# no error 

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
# a = Test.new
# b = Test.new
# a.test_method(b)
# a.private_method                        # d
# no error 

class Test
    def test_method(other_instance)
        protected_method                  # a
        self.protected_method             # b
        other_instance.protected_method   # c
    end

    protected
    def protected_method
        puts "This is a protected method"
    end
end
# a = Test.new
# b = Test.new
# a.test_method(b)
# a.protected_method                        # d
# no error  
class SuperClass
    def some_method
        puts "in SuperClass#some_method"
    end
end

class SubClass < SuperClass
    def some_method
        super
        puts "in SubClass#some_method"
    end
end
s = SubClass.new
s.some_method 

 