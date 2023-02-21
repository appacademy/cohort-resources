# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    # sets up attr reader password, password=, and is_password? methods for us
    has_secure_password

    before_validation :ensure_session_token
  
    has_many :transactions,
      dependent: :destroy
    has_many :likes,
      dependent: :destroy
    has_many :liked_teas,
      through: :likes,
      source: :tea

    # when we login, we must check if our username and password matches in the db
    def self.find_by_credentials(username, password)
      user = User.find_by_username(username)
      # if user&.authenticate(password) # same thing
      if user && user.authenticate(password)
        return user
      end
      nil
    end

    # generally creates session token for new users
    def ensure_session_token
      self.session_token ||= generate_session_token
    end

    # avoid low probability unique validation collision
    def generate_session_token
      while true
        token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
      end
    end

    # change the session token in the db whenever we login or logout, 
    # save it to the db, and return the token
    def reset_session_token!
      self.session_token = generate_session_token
      self.save!
      self.session_token
    end

  end