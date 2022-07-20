# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  username      :string           not null
#  email         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  age           :integer          not null
#  favorite_coin :string           not null
#
class User < ApplicationRecord
    validates :age, :favorite_coin, presence: true
    validates :username, :email, uniqueness: true, presence: true

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

    has_many :chirp_likes,
        through: :chirps,
        source: :likes

    has_many :chirp_likers,
        through: :chirp_likes,
        source: :liker



 # ----------------------------------------------------------------------

#Find all users between the ages of 10 and 20 inclusive. Show their username, and political affiliation.
# Note: .. for inclusive, ... for exclusive

        # User.where(age: 10..20).select(:username, :email)

        # def filter_by_age_group
        #     User.where(age: 10..20).select(:username, :email).pluck
        # end 

# --------------------------------------------------------------

#         Find all users not younger than the age of 11. Use where.not
# Note: comparison operators need to use strings

# User.where.not("age <= ? ", 11) -> sanitizing of input is preferred
# User.where.not("age <= 11") -> not preferred due to vulnerability to sql injections

# --------------------------------------------------------------

# Find all favorite coins of users

# User.select(:favorite_coin).group(:favorite_coin)


# -------------------------------------------------------------------

# Find all user instances  who has a favorite_coinin this list and order by ascending

# Given favorite_coins = ["Bitcoin", "USD Coin"]
# User.where(favorite_coin: favorite_coins).order(username: :asc)


# -----------===================================-------------------------

# User.joins(:chirps).select("*").as_json



# -----------------------------------------------------------------------

# Find all chirps for a particular user

# User.find_by(username: "chrismas").chirps
# This works, but notice that we had to run two different queries. One for find_by and one for the chirps association.

# Let's get the same information in a single query to the DB. We can do this using joins.

#     Chirp.joins(:author).where( users: {username: "chrismas"})

# users = User.where(users: {age: 21})



# users.each do |user|
#     p user.username
# end 



   
end
