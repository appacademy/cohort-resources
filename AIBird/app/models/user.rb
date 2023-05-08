# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  evil_score  :integer          not null
#  affiliation :string           not null
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    validates :password, length: {minimum: 6}, allow_nil: true

    # for validation
    attr_reader :password

    # could use before_validation too
    after_initialize :ensure_session_token # any method we pass in here, will be called after .new (or during .create)

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.check_password?(password) ? user : nil
    end

    def check_password?(password)
        # create bcrypt object of the pw_digest
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password) # method built into bcrypt to check if the password hashes to the digest
    end

    def password=(password)
        @password = password # just for validation
        # create the digest
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save! # fail loudly
        self.session_token
    end

    # make sure we can pass our session_token validation
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    
    has_many :chirps,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Chirp,
        dependent: :destroy
    
    has_many :likes,
        foreign_key: :liker_id,
        class_name: :Like,
        dependent: :destroy

    # Find all users with an evil score between 1 and 5 inclusive, show username and affiliation

    def self.nice_users
        User.select(:username, :affiliation).where("evil_score BETWEEN 1 AND 5")
        # User.select(:username, :affiliation).where(evil_score: 1..5)
    end

    # Find all users that don't have an evil_score less than 9. Use where not
    def self.evil_users
        User.select(:username).where.not("evil_score < 9")
    end

    # Find all affiliation of our users. use group
    def self.all_affiliations
        User.select(:affiliation).group(:affiliation)
    end

    # Find all users who has as affiliation in this list and order by username ascending
    def self.find_affiliates
        affiliations = ['AI', 'human']
        User.where("affiliation IN (?)", affiliations).order("username")
        # User.where("affiliation IN (['AI', 'human'])").order("username")
        # User.where(affiliation: affiliations).order(username: :ASC)
    end

    # Find all chirps for a particular user, use an association
    def self.find_aimike_chirps
        # User.where("username = 'ai_mike'").first.chirps
        User.find_by(username: 'ai_mike').chirps
    end
    

end
