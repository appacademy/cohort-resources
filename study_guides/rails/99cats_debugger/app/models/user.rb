class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  # If a password was set, we validate it meets the requirements.
  # Note the `allow_nil`.
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true

  attr_reader :password

  has_many :cats

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    debugger
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    debugger
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def owns_cat?(cat)
    cat.user_id == self.id
  end

  def password=(password)
    debugger
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    debugger
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    debugger
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
