# == Schema Information
#
# Table name: users
#
#  id                 :bigint           not null, primary key
#  username           :string           not null
#  email              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  coding_affiliation :string           not null
#  age                :integer          not null
#  password_digest    :string           not null
#  session_token      :string           not null
#
class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :age, :coding_affiliation, presence: true
    validates :password, length: {minimum: 6, allow_nil: true} # validate password length
    attr_reader :password



    after_initialize :ensure_session_token # this method will be called after User.new

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

    # SPIRE
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

        # overwriting setter method
    def password=(password)
        # self.password recursion
        # password= scope problem
        @password = password # password is just an instance variable -> not saved to db
        # use bcrypt to hash our password -> set to pw_digest
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64 # random string
    end

end
