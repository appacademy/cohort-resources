# Given specs, implement a method to read user input for a 
#   player's turn during gameplay (such as hangman, battleship, mastermind, etc.).
# Given specs, implement a method to switch turns during two-player gameplay (such as battleship, tic-tac-toe, etc.).


class Game 
    # game class initialized with size of grid and any number of dog hashes
    # which will represent players
    # { name: 'bob', pos: [0,0] }
    def initialize(n, *positions)
      @dogs = positions.map { |pos| Dog.new(pos) }
      @current_dog = @dogs.first
      @map = Map.new(n)
    end

    def switch_turn
      @current_dog = @dogs.rotate!.first
    end

    # takes in a pos and moves the current player
    # to that position

    def move_position(pos)
      # reassign value at this pos to :d to rep dog
      @map[pos] = :d
      old_pos = @current_dog.pos 
      # reassigns dogs old pos to :x because dog moved
      @map[old_pos] = :x
      # changes dogs pos to reflect to value
      @current_dog.pos = pos
    end

    # asks the current player for a new position
    # calls move position passing in the users input
    def get_move
      print "enter a position in format 'x y' : "
      input = gets.chomp.split.map(&:to_i)
      move_position(input)
    end


end