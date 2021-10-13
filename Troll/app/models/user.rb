# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token   #we could use after_initialize :ensure_session_token

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true 

  has_many :tweets,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Tweet
  
  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like

  has_many :liked_tweets,
    through: :likes,
    source: :tweet


  def password=(password)
    self.password_digest = BCrypt::Password.create(password) #we make a bcrypt string looking object
    @password = password
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64 #if we don't have one, lets set it to a new urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_valid_password?(password)
      return user 
    else
      nil
    end
  end

  def is_valid_password?(password)
    password_object = BCrypt::Password.new(self.password_digest) #generates bcryp object from password_digest
    password_object.is_password?(password) #do they match?
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end


    ######################
    # Demo - Finder methods
    #Get first user record, use first
    # User.first
    # #Get last user record, use last
    # User.last
    # #Find a user that exists by id, use find
    # User.find(5)
    # #Find a user that doesn't exist by id, use find
    # User.find(100)
    # #Find a user by username, use find_by
    # User.find_by(username: "president_dellacqua", political_affiliation: "Ruby")
    # #Find a user by username that does not exist, use find_by
    # User.find_by(username: "turkey")

    #####################
    # Demo - Query methods

    #Find all users with ages between 20 and 40 inclusive. Show their username, and political affiliation.
    # User.where(age: 20..40).select(:username, :political_affiliation)

    # #Find all users not younger than the age of 30. Use `where.not`
    # User.where.not("age < ?", 30)

    # #Find all political_affiliations of our users
    # User.select(:political_affiliation).group(:political_affiliation)
  
    # #Find all users who has a political affiliation in this list and order by ascending age
    # political_affiliations = ["Ruby", "C"]

    # User.where(political_affiliation: political_affiliation).order(age: :asc)



end

