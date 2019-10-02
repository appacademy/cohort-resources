# == Schema Information
#
# Table name: users
#
#  id                    :bigint           not null, primary key
#  username              :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  email                 :string           not null
#  political_affiliation :string
#  age                   :integer
#  password_digest       :string           not null
#  session_token         :string           not null


class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, presence: true


    attr_reader :password
    after_initialize :ensure_session_token


    has_many :chirps, 
        foreign_key: :author_id, 
        class_name: :Chirp 

    # has_many :likes, 
    #     foreign_key: :user_id, 
    #     class_name: :Like

    # has_many :comments, 
    #     foreign_key: :author_id, 
    #     class_name: :Comment
        
    # has_many :liked_chirps, 
    #     through: :likes, 
    #     source: :chirp 


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end


    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end


    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end


    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
