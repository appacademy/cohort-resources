# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  troll_score :integer          not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true

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

