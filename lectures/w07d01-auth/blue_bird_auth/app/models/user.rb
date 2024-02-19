# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  age         :integer          not null
#  coding_pref :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  validates :age, presence: true


  after_initialize :ensure_session_token # this happens after .new

  has_many :chirps,
    dependent: :destroy
   
  has_many :likes,
    foreign_key: :liker_id,
    dependent: :destroy
# SPIRE 

def self.find_by_credentials(username, password)
  # goals 
  # find the user by username
  # if we found one, then check their password
  # if the password id correct, then return the user
  # otherwise return nil

  user = User.find_by(username: username)
  if user && user.is_password?(password)
    return user 
  else 
    return nil
  end 

end 

def password=(password)
  # rails will run our setter
  # but we are "customizing" this setter 
  # we are taking this password that has been given & creating password_digest
  @password = password 
  # we set our password instance variable

# now we must make our password_digest!
# this is made using bcrypt!!!
self.password_digest = BCrypt::Password.create(password)


end 


def is_password?(password)
  # we need to use the BCrypt library again in order to verify password
  # create a NEW BCrypt password object in order to do this!
  password_object = BCrypt::Password.new(self.password_digest)

  # not recursion!!!!
  password_object.is_password?(password)
  # verify if password is a match!!
end 

def reset_session_token
  # change the session token of a user to a new random session token
  # and then save it!
  self.session_token = SecureRandom::urlsafe_base64  # this will create new session token
  # then we will save the session_token
  self.save!
  # finally, return the session_token
  self.session_token
end 



def ensure_session_token
  # use session_token we already have, if we dont have one, then  make one!
  self.session_token ||= SecureRandom::urlsafe_base64
end 






  # def self.age_greater_than_18_but_less_than_60
  #   # User.where("age > 18 AND age < 60")
  #   User.select(:id, :username, :age).where(age: 19...60)
  # end

  # def self.coding_pref_is_not_c
  #   User.select(:id, :username, :coding_pref).where.not("coding_pref = (?)", "C")
  # end

  # def self.distinct_coding_prefs
  #   User.group(:coding_pref).pluck(:coding_pref)
  # end

  # def self.coding_prefs_in_list(*prefs)
  #   User.select(:id, :username, :coding_pref).where(coding_pref: prefs)
  # end
end
