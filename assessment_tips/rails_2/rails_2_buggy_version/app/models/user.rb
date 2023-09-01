class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil?: true}

  has_many :goals

  before_validation :reset_session_token!

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.new(password)
  end

  def is_password?(password)
    BCrypt::Password.create(self.password_digest).is_password?(password)
  end

  def reset_session_token!
     self.session_token = SecureRandom.urlsafe_base64
     self.save
     self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end


end
