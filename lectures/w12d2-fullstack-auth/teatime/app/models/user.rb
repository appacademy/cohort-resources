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
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    has_secure_password # handles password attr reader and setter as well as is_password (authenticate)

    before_validation :ensure_session_token
  
    has_many :transactions,
      dependent: :destroy
    has_many :likes,
      dependent: :destroy
    has_many :liked_teas,
      through: :likes,
      source: :tea

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)

      # if user&.authenticate(password) # equivalent
      if user && user.authenticate(password)
        return user
      end
      nil
    end

    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      self.session_token
    end

    private
    def generate_unique_session_token
      while true
        token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
      end
    end
      
  end