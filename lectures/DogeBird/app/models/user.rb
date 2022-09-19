# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  favorite_coin   :string           not null
#  age             :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord
  before_validation :ensure_session_token # after_initialize is also ok!

  validates :username, :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  #validates :email, :username, presence: true, uniqueness: true     <== also valid
  validates :age, inclusion: { in: 10..999 }
  validates :password, length: { minimum: 6 }, allow_nil: true
    # @password
  attr_reader :password 

  # def password
  #   @password
  # end

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

  has_many :chirp_likers,
    through: :chirps,
    source: :likers

  #SPIRE

  # method to find user using username & password (log in)
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password) #need to def CHECK
      user
    else
      nil
    end
  end
  
  # overwrite setter to set the value of password digest and validate @password
  def password=(password)
    self.password_digest = BCrypt::Password.create(password) #user input taken to make a Bcrypt object
    @password = password
  end

  #methos to check is input matches hashedsalted password in db
  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  #reset session token every time a user signs in or out to protect their data
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  #either the user has a session_token or we give it one!
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end









  # AR queries

  # find all users between the ages of 10 and 20 inclusive
  def self.find_age_range
    # User.where("age BETWEEN 10 AND 20")
    # User.where("age BETWEEN ? AND ?", 10, 20)
    User.where(age: 10..20)
  end

  # Find all users not younger than the age of 11
  def self.querytwo
    User.where.not("age < 11")
  end

  # Find all favorite_coins of our users
  def self.querythree
    # User.select("favorite_coin").distinct
    User.select(:favorite_coin).group(:favorite_coin)
    # User.select("favorite_coin").group("favorite_coin").each {|user| puts user.favorite_coin}
  end

  # Find all users who has a favorite_coin in this list and order by ascending username
  def self.queryfour
    favorite_coins = ["Bitcoin", "Ethereum"]
    User.select(:username).where("favorite_coin IN (?)", favorite_coins)
  end

  # Find all chirps for Chris 'chrismas'
  def self.queryfive
    # chris = User.find_by_username('chrismas')
    # chris.chirps
    # User.find_by_username('chrismas').chirps
    Chirp.joins(:user).where("username = 'chrismas'")
    # User.joins(:chirps).where("username = 'chrismas'")
  end
end
