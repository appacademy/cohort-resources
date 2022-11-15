# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  email       :string           not null
#  coding_pref :string
#  age         :integer          not null
#
class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    validates :password_digest, presence: true 
    validates :session_token, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6}, allow_nil: true  
    # validates :column_name, validations.....

    attr_reader :password
    before_validation :ensure_session_token


  


    has_many :chirps,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Chirp,
        dependent: :destroy

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy


    has_many :liked_chirps,
        through: :likes,
        source: :chirp 
        
        
    # has_many :chirp_likes,
    #     through: :chirps,
    #     source: :likes 

    # has_many :chirp_likers,
    #     through: :chirp_likes,
    #     source: :liker




    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        # debugger
        # if we found user && users password is correct
        if user && user.is_password?(password)
            return user
        else 
            return nil
        end

    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)

    end 


    def is_password?(password)
        # we write new because we want to create object to have access to BCrypt library
        bcrypt_object = BCrypt::Password.new(self.password_digest)
        # ********************  NOT recursion!!!!!!!!!!!!!!!!!!
        bcrypt_object.is_password?(password)

    end


    def reset_session_token
        self.session_token = generate_unique_session_token
        # generate new session_token
        self.save!
        # save to db
        self.session_token
        # return session_token

    end 



    def generate_unique_session_token
        token = SecureRandom::urlsafe_base64
        while User.exists?(session_token: token)
            token = SecureRandom::urlsafe_base64
        end 
        token

    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end 


end 
