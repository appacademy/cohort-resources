class Number
    attr_reader :value 

    def initialize(value)
        @value = value
    end

    def ==(number)
        # @value == number.value
        p "The results are equal"
    end

    def >(number)
        @value > number.value
    end

end

num1 = Number.new(3)
num2 = Number.new(3)

num1.>(num2)
num1 > num2



