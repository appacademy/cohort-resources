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
    has_secure_password
    # takes care of #password=, #password
    # replaces #is_password? with #authenticate
    # adds a presence validation
    # adds password_confirmation functionality
    
    before_validation :ensure_session_token
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
  
    has_many :transactions,
      dependent: :destroy
    has_many :likes,
      dependent: :destroy
    has_many :liked_teas,
      through: :likes,
      source: :tea

    #SPIRE
    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      if user&.authenticate(password)
        return user
      else
        nil
      end
    end

    def reset_session_token
      self.session_token = generate_unique_session_token
      save!
      session_token
    end

    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end

    private
    def generate_unique_session_token
      while true
        token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
      end
    end
  end