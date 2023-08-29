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
#  affiliation     :string
#  evil_score      :integer          not null
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord
  before_validation :ensure_session_token
  # after_initialize :ensure_session_token

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6}, allow_nil: true
  attr_reader :password

  has_many :chirps,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Chirp

  has_many :likes,
    primary_key: :id,
    foreign_key: :liker_id,
    class_name: :Like

    # has many through - uses existing associations, rather than foreign keys
  has_many :liked_chirps,
    through: :likes,
    source: :chirp

    #USER AUTH METHODS
    def self.find_by_credentials(username, password)

      user = User.find_by(username: username)
      if user && user.is_password?(password)
        user
      else
        nil
      end
    end

    def password=(password)
      self.password_digest = BCrypt::Password.create(password)
      @password = password
    end

    def is_password?(password)
      password_obj = BCrypt::Password.new(self.password_digest)
      password_obj.is_password?(password)
    end

    def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64
      self.save!
      self.session_token
    end

    def ensure_session_token
      # self.session_token = SecureRandom::urlsafe_base64
      self.session_token ||= SecureRandom.urlsafe_base64
    end

    # def generate_unique_session_token
    #   while true
    #     session_token = SecureRandom.urlsafe_base64
    #     return session_token unless User.exists?(session_token: session_token)
    #   end
    # end

    # def ensure_session_token
    #   # self.session_token = SecureRandom::urlsafe_base64
    #   self.session_token ||= generate_unique_session_token
    # end


    # GETTING RECORDS, NOT RELATIONS:

    #first user
    # User.first

    #last user
    # User.last

    #user with the specified id, id only
    # User.find(1)

    #user with specified key-value pair
    # User.find_by(username: "abbey")

    def self.nice_users
      # User.select(:id, :username, :affiliation).where("evil_score BETWEEN 1 AND 5")
      User.select(:id, :username, :affiliation).where(evil_score: 1..5)
    end

    def self.evil_users
      # User.select(:id, :username, :affiliation).where("evil_score = 9")
      User.select(:id, :username, :affiliation).where(evil_score: 9)
    end

    def self.all_affiliations
      User.select(:affiliation).group(:affiliation)
    end

    def self.non_humans
      affiliations = ["cyborg", "AI"]
      # User.where("affiliation IN ('cyborg', 'AI')")
      User.where("affiliation IN (?)", affiliations).order(username: :ASC)
    end

    def self.find_ai_mike_chirps
      User.find_by(email: "ai_mike@aa.io").chirps
    end

end
