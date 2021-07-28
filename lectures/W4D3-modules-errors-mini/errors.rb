
class WrongPasswordError < StandardError
end

def enter_password
  puts "whats the password?"

  wrong_password_attempts = 0

  ### TODO: Add logic to handle a raised error here
  begin
    get_input
  rescue WrongPasswordError => error
    puts error.message
    wrong_password_attempts += 1

    if wrong_password_attempts > 2
      raise "Too many failed password attempts, your account has been locked =("
    end

    retry

  ensure
    puts "Number of incorrect attempts: #{wrong_password_attempts}"
  end

  puts "thanks!"
end

def get_input
  input = gets.chomp

  # echo_input(input)

  ### TODO: Add logic to raise an error unless password is 'starwars'
  raise WrongPasswordError.new("Ah Ah Ah, you didn't say the magic word.") unless input == 'starwars'
end

def echo_input(input)
  puts input * 3 # this will throw an error
end

enter_password