# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  coding_pref :string           not null
#  age         :integer          not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true 
    validates :session_token, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6}, allow_nil: true 
    attr_reader :password 
    before_validation :ensure_session_token


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        # finding user by username
        # debugger
        if user && user.is_password?(password)
            # check to see if user exists and if password is correct 
            return user 
        else 
            # otherwise we return null
            return nil 
        end 
    end 


    def password=(password)
        # here is where we set the pasword digest, we use BCrypt CREATE 
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end 

    def is_password?(password)
        # we use BCrypt NEW to gain acccess to BCrypt is_password? method
        password_object = BCrypt::Password.new(self.password_digest)
        # THIS IS NOT RECURSION
        password_object.is_password?(password)
    end 





    def reset_session_token!
        # we generrate a new token and save it to the user
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        # then we return the token back to us 
        self.session_token

    end

    def ensure_session_token 
        # generates the session token.
        self.session_token ||= SecureRandom::urlsafe_base64
    end 






    has_many :chirps,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Chirp

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :liked_chirps,
        through: :likes,
        source: :chirp
end



#DEMO 1 (Finder Methods)

#     #Get first user record, use first
#     User.first ✅
#     #Get last user record, use last
#     User.last ✅
#     #Find a user that exists by id, use find
#     User.find(10) ✅ #takes ids as an argument
#     #Find a user that doesn't exist by id, use find
#     User.find(100) 😭 #fails loudly
#     #Find a user by username, use find_by
#     User.find_by(username: 'diegous') #takes in a hash
#     #Find a user by username that does not exist, use find_by
#     User.find_by(username: 'xxxnoscope') #fails quietly



# # DEMO 2 (Queries with Conditions)
#     #Find all users between the ages of 10 and 30 inclusive. Show their username, and coding preference.
#     User.select('username, coding_pref').where('age >= 10 AND age <= 30')
#     User.select(:username, :coding_pref).where(age: (10..30))
#     #Find all users not younger than the age of 11. Use `where.not`
#     User.where.not(age: (0..10))
#     User.where.not('age < ?',11)
#     #Find all coding preferences of our users
#     User.select(:coding_pref).distinct
#     User.select(:coding_pref).group(:coding_pref)
#     #Find all users who has a coding_preference in this list and order by ascending username
#     coding_preferences = ["JavaScript", "Ruby"]
#     User.select(:username, :coding_pref)
#         .where(coding_pref: coding_preferences) 
#         .order(:username => :desc)
#         # .order(username: :desc)
