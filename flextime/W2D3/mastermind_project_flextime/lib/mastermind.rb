# A majority of this project is similar to the solution. For flextime, we went over
# self.valid_pegs?, initialize, & ask_user_for_guess
require_relative "code"

class Mastermind
    def initialize(length)
        @secret_code = Code.random(length)
    end

    def print_matches(code)
        p code.num_near_matches(@secret_code)
        p code.num_exact_matches(@secret_code)
    end

    # "gets" asks a user for an input, but add "\n" at the end of whatever the user 
    # inputs. ".chomp" gets rid of the "\n" at the end of the input.
    def ask_user_for_guess
        p 'Enter a code'
        input = gets.chomp
        check = Code.from_string(input)
        # The commented out code below also works if you prefer it over lines 19-20. 
        # check = Code.from_string(gets.chomp)
        print_matches(check)
        check == @secret_code
    end
end
