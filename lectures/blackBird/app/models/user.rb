# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  age        :integer          not null
#

class User < ApplicationRecord 
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true 
    validates :session_token, presence: true, uniqueness: true
    validates :password, length:{minimum:6}, allow_nil: true 
    validates :age, presence: true

    attr_reader :password

# before we run our validations, lets ensure our session token is there
    before_validation :ensure_session_token



    
    
    has_many :chirps,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Chirp

    has_many :likes, 
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy

    has_many :liked_chirps,
        through: :likes,
        source: :chirp

    # #Get first user record, use first
    # User.first

    # #Get last user record, use last
    # User.last

    # #Find a user that exists by id, use find
    # User.find(8)

    # #Find a user that doesn't exist by id, use find
    # # User.find(9001) # fails loudly

    # #Find a user by username, use find_by
    # User.find_by(id: 8)
    # User.find_by(username: 'all_powerful_elliot')

    # #Find a user by username that does not exist, use find_by
    # User.find_by(id: 9001) # fails quietly

    # #Find all users between the ages of 10 and 20 inclusive. Show their username and email.
    # User.where('age BETWEEN 10 AND 20')
    # User.where(age: 10..20).select(:username, :email)

    # #Find all users not younger than the age of 11. Use `where.not`
    # User.where.not('age < 11')

    # #Show off group
    # User.group(:age).select(:age, 'COUNT(*) AS num')

    # #Show off order


    # SPIRE 
    def self.find_by_credentials(username,password)
        # gonna find the user by the provided credentials in the paramaters of the method.
        # 

        # were going to find the user by the username
        user = User.find_by(username: username)
        # if I found the user and the user password is correct then return the found user
        if user && user.is_password?(password)
            return user
        else 
            return nil
        end 
    end



    def password=(password)
        @password = password
        # set password instance variable 

        # Set password digest column to salted and hashed Password using BCrypt
        self.password_digest = BCrypt::Password.create(password)
    end 


    def is_password?(password)
        # we use this method in self.find_by_credentials


        # make a new instance of a BCrypt object in order to access the BCrypt library 
        bcrypt_object = BCrypt::Password.new(self.password_digest)

        # this is NOT recursion!!!!!!!!!!!!!!*****************
        bcrypt_object.is_password?(password)

    end 


    def reset_session_token
        self.session_token = generate_unique_session_token 
        # generates new session_token 
        self.save! 
        # save our new session_token to database 

        # return session_token
        self.session_token
    end 


# this is an optional helper method that generates a new token for us
    def generate_unique_session_token
        token = SecureRandom::urlsafe_base64
        while User.exists?(session_token: token)
            token = SecureRandom::urlsafe_base64
        end 
        token
    end 


    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

















end 