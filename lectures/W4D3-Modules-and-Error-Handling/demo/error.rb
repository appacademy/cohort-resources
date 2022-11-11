class WrongPasswordError < StandardError; end
class OtherError < StandardError; end

def enter_password
  puts "whats the password?"

  wrong_password_attempts = 0

  begin 
    get_input
  rescue WrongPasswordError => e 
    puts e.message
    wrong_password_attempts += 1

    if wrong_password_attempts > 2
      raise "Too many incorrect attempts. Your account is locked :("
    end
    retry
    rescue OtherError
      puts "another error message"
    ensure 
      puts "Number of incorrect attempts: #{wrong_password_attempts}"
    end


  ### TODO: Add logic to handle a raised error here
  get_input

  puts "thanks!"
end

def get_input
  input = gets.chomp

  ### TODO: Add logic to raise an error unless password is 'starwars'
  
  raise WrongPasswordError.new("Wrong Password!") unless input == "starwars"
end

enter_password