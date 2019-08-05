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
#  session_token         :string           not null
#  password_digest       :string           not null
#

class User < ApplicationRecord
    validates :session_token, :username, :email, presence: true, uniqueness: true 
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password 
    after_initialize :ensure_session_token


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

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)  #creates hash
        @password = password
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password) 
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def reset_session_token!  # mutates
        self.session_token = SecureRandom::urlsafe_base64 
        self.save!  
        self.session_token
    end

end
