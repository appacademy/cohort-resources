# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  age         :integer
#  affiliation :string
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true

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
