# A majority of this project is similar to the solution. For flextime, we went over
# self.valid_pegs?, initialize, & ask_user_for_guess
class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  attr_reader :pegs
  # Starting a method with "self." (as seen below) indicates a class method. 
  # A class method does NOT rely on a specific instance of the class, while an
  # instance method DOES rely on a specific instance.
  def self.valid_pegs?(char_arr)
    char_arr.each do |char|
      return false if !POSSIBLE_PEGS.include?(char.upcase)
    end
    true
  end

  # Typing "raise" (like on line 27) raises a general error. The string afterwards
  # is optional, but it is nice to give the user some idea of why the error was raised.
  # Sometimes, specs will search for a specific string to appear when an error is raised.
  def initialize(arr)
    if !Code.valid_pegs?(arr)
      raise 'Invalid peg input'
    end
    # Below are 3 ways to achieve the same output. For this point in the class,
    # don't feel as though you should memorize each of these ways (there are technically
    # many more ways to solve it), I recommend sticking to whichever method you prefer.
    @pegs = arr.map(&:upcase)

    # @pegs = arr.map{|char| char.upcase}

    # @pegs = []
    # arr.each do |char|
    #   @pegs << char.upcase
    # end
  end

  def self.random(length)
    # Below are a couple different ways to solve this method. Like above, use
    # whichever you are more comfortable with.

    # Code.new(Array.new(length, POSSIBLE_PEGS.keys.sample))

    arr = []
    length.times do 
      arr << POSSIBLE_PEGS.keys.sample
    end
    Code.new(arr)
  end

  def self.from_string(str)
    Code.new(str.split(''))
  end

  def [](i)
    @pegs[i]
  end

  def length
    @pegs.length
  end


  # Part 2

  def num_exact_matches(code)
    count = 0
    (0...code.length).each do |i|
      count += 1 if code[i] == self[i]
    end
    count
  end

  def num_near_matches(guess_code)
    code_dup = self.pegs.dup
    guess_dup = guess_code.pegs.dup

    guess_dup.each_with_index do |peg, i|
      if peg == code_dup[i]
        code_dup[i] = nil
        guess_dup[i] = nil
      end
    end
    code_dup.delete(nil)
    guess_dup.delete(nil)

    count = 0
    guess_dup.each_with_index do |peg, i|
      if code_dup.include?(peg)
        count += 1
        code_dup.delete_at(code_dup.index(peg))
      end
    end
    count
  end

  def ==(code)
    num_exact_matches(code) == self.length && code.length == self.length
  end
end
