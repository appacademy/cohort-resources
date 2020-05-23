class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nill: true }
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true

    has_many :goals, 
    foreign_key: :owner_id,
    class_name: "Goal"

    after_initialize :reset_session_token!

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        return nil if user.nil?
        user.is_password?(password) ? self : nil
    end

    def is_password?(password)
        BCrypt::Password.create(self.password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.new(password)
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
