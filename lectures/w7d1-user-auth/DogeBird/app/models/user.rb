# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer          not null
#  favorite_coin   :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord
    validates :age, :favorite_coin, :password_digest, presence: true
    validates :username, :email, :session_token, uniqueness: true, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    # We want to validate that, if a password is provided, it has a length of at least 6
    # We want to allow nil since we won't always include password in our params (example: update action)
    # This validation requires a @password instance variable to be set as well as an attr_reader

    attr_reader :password #needed to be able to do password validation
    before_validation :ensure_session_token #runs method before validation

    def self.find_by_credentials(username, password)
        # find a user by their username
        user = User.find_by(username: username)
        # check if the user exists (username is in db) AND the password is correct (using instance method)
        if user && user.is_password(password) # could also name the method check_password?
            user
        else
            # if username isn't found, or password is incorrect, return nil
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password(password)
        # `self.password_digest` is a string from the db. we can turn it back into a BCrypt Password by passing it as an argument of Bcrypt::Password.new()
        # Bcrypt::Password.new() takes an existing digest and returns a Bcrypt Password instance
        bcrypt_obj = BCrypt::Password.new(self.password_digest)
        # It looks like a string, but check out its `.class` method!
        # We can call `.is_password?` on the instance, passing a string of our submitted password
        # Bcrypt will be able to tell if the digest was generated from that password, and returns a boolean
        bcrypt_obj.is_password?(password)
    end

    def reset_session_token
        # We want to call this method any time we're: 
        # logging in a user - to ensure they aren't left logged in elsewhere
        # logging out a user - to ensure their session_token is no good once they log out
        # self.session_token = SecureRandom::urlsafe_base64
        self.session_token = generate_unique_session_token
        # make sure the new token persists!
        # use save with a ! to help debug
        self.save!
        # return the new token for convenience
        self.session_token
    end

    
    def ensure_session_token
        # self.session_token ||= SecureRandom::urlsafe_base64 
        self.session_token ||= generate_unique_session_token
        # since this method is run everytime we validate if we use before_validation, we only want to assign session_token
        # if it isn't already provided. Otherwise, we'll reset it when we update as well
        # and log out our user!
        # SecureRandom is a number generating library
        # urlsafe_base64 generates a random string for us that is urlsafe and base64 encoded.
    end
    
    
    def generate_unique_session_token
        #ensures that the session_token does not match any existing user's session token
        token = SecureRandom::urlsafe_base64
        while User.exists?(session_token: token)
            token = SecureRandom::urlsafe_base64
        end
        token
    end
    
    has_many :chirps,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Chirp,
        dependent: :destroy

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy

    has_many :liked_chirps,
        through: :likes,
        source: :chirp

    has_many :chirp_likes,
        through: :chirps,
        source: :likes

    has_many :chirp_likers,
        through: :chirp_likes,
        source: :liker



 # ----------------------------------------------------------------------

#Find all users between the ages of 10 and 20 inclusive. Show their username, and political affiliation.
# Note: .. for inclusive, ... for exclusive

        # User.where(age: 10..20).select(:username, :email)

        # def filter_by_age_group
        #     User.where(age: 10..20).select(:username, :email).pluck
        # end 

# --------------------------------------------------------------

#         Find all users not younger than the age of 11. Use where.not
# Note: comparison operators need to use strings

# User.where.not("age <= ? ", 11) -> sanitizing of input is preferred
# User.where.not("age <= 11") -> not preferred due to vulnerability to sql injections

# --------------------------------------------------------------

# Find all favorite coins of users

# User.select(:favorite_coin).group(:favorite_coin)


# -------------------------------------------------------------------

# Find all user instances  who has a favorite_coinin this list and order by ascending

# Given favorite_coins = ["Bitcoin", "USD Coin"]
# User.where(favorite_coin: favorite_coins).order(username: :asc)


# -----------===================================-------------------------

# User.joins(:chirps).select("*").as_json



# -----------------------------------------------------------------------

# Find all chirps for a particular user

# User.find_by(username: "chrismas").chirps
# This works, but notice that we had to run two different queries. One for find_by and one for the chirps association.

# Let's get the same information in a single query to the DB. We can do this using joins.

#     Chirp.joins(:author).where( users: {username: "chrismas"})

# users = User.where(users: {age: 21})



# users.each do |user|
#     p user.username
# end 



   
end
