# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  username      :string           not null
#  email         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  favorite_coin :string           not null
#  age           :integer          not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true

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
        source: :chirp,
        dependent: :destroy

    # active record querys

    # Find all users between the ages of 10 and 20 inclusive. Show their username and age
    def self.find_young_users
        # User.where("age >= 10 AND age <= 20").select("username, age") # more sql looking
        User.where(age: 10..20).select(:username, :age) # more ruby looking
    end

    # Find all users not younger than the age of 11. use where not
    def self.find_not_younger
        # User.where.not("age < 11")
        User.where.not("age < ?", 11)
    end

    # Find all of our users favorite coins
    def self.find_favorite_coins
        User.select("favorite_coin").group("favorite_coin")
        # User.select("favorite_coin").distinct
    end

    # Find all users with the given favorite coins and order by ascending name
    def self.find_certain_coins
        fav_coins = ["Bitcoin", "Ethereum"]
        # User.where("favorite_coin IN (?)", fav_coins).order("username ASC")
        User.order(username: :asc).where(favorite_coin: fav_coins)
    end

    # Find all chirps for a particular user -> chrispy
    def self.find_chris_chirps
        User.find_by(username: "chrispy").chirps
    end

        
end
