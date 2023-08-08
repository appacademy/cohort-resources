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
    # shortcut to add password reader, writer, and authenticate
    # built in functionality for password_confirmation
    has_secure_password

    before_validation :ensure_session_token

    validates :username, presence: true, uniqueness: true

    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :likes,
        dependent: :destroy

    has_many :transactions,
        dependent: :destroy

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.authenticate(password)
            user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_token
        save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_token
    end

    private
    def generate_unique_token
        loop do
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
