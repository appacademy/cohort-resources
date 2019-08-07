# == Schema Information
#
# Table name: users
#
#  id                    :bigint           not null, primary key
#  username              :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  email                 :string           not null
#  political_affiliation :string           not null
#  age                   :integer          not null
#

class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence:true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username) #find errors badly, booo

        return nil unless user

        user.is_password?(password) ? user : nil
    end

    def is_password?(password) #can be named w/e you want ex:password_is 
        # BCrypt::Password.new(self.password_digest).is_password?(password) #not and inifinite loop
        encrypted_password = BCrypt::Password.new(self.password_digest) #turning into a BCrypt password object
        encrypted_password.is_password?(password) #argument password is a string (Plain text). 
    end

    def ensure_session_token #this is called after being initialized
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        # Reassigning session token gives it new object_id, so `be` matcher works
        self.session_token = SecureRandom.urlsafe_base64
        self.save! #if we dont have this then we dont actually save to the database
        self.session_token #need to return 
    end

    def password=(password) #this is called during initialized
        @password = password
        self.password_digest = BCrypt::Password.create(password) #BCrypt inherits from string. 
    end

    has_many :chirps,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: "Chirp"

    has_many :likes,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Like 

    has_many :liked_chirps,
        through: :likes,
        source: :chirp 
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment
end
