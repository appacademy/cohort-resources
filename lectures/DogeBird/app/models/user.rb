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
#  favorite_coin   :string
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :age, :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token
  # or
  # before_validation :ensure_session_token

  has_many :chirps,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chirp

  has_many :likes,
    primary_key: :id, 
    foreign_key: :liker_id,
    class_name: :Like

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user
      if user.check_password?(password)
        return user
      end
    end
    nil
  end

  def check_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end


    #Get first user record, use first
    #-- User.first 

    #Get last user record, use last
    #-- User.last

    #-- User.second, User.third, etc

    #Find a user that exists by id, use find
    #-- User.find(id)

    #Find a user that doesn't exist by id, use find

    #Find a user by username, use find_by
    #-- User.find_by(column_name: value)
    
    #Find a user by username that does not exist, use find_by

    #Find all users between the ages of 10 and 20 inclusive. Show their username, and favorite coin.
    #-- User.where(age: 10..20).select(:username, :favorite_coin)

    #Find all users not younger than the age of 11. Use `where.not`
    #-- User.where.not(age: 0..11)
    #-- User.where.not("age <= 11")

    #Find all favorite coins of our users
    #-- User.group(:favorite_coin).select(:favorite_coin)

    #Find all users who has a favorite coin in this list and order by ascending
    #favorite_coins = ["Bitcoin", "Ethereum"]
    #-- first save array: favorite_coins = ["Bitcoin", "Ethereum"]
    #-- User.where('favorite_coin IN (?)', favorite_coins)
    #-- User.where(favorite_coin: favorite_coins).order(username: :asc)
    
end
