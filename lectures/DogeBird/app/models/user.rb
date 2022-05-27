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
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :age, presence: true

  has_many :chirps,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Chirp

  has_many :likes,
    primary_key: :id, 
    foreign_key: :liker_id,
    class_name: :Like


    #Get first user record, use first
    #-- User.first 

    #Get last user record, use last
    #-- User.last

    #-- User.second, User.third, etc

    #Find a user that exists by id, use find
    #-- User.find(id)

    #Find a user that doesn't exist by id, use find

    #Find a user by username, use find_by
    #-- User.find_by(column_name: value)
    
    #Find a user by username that does not exist, use find_by

    #Find all users between the ages of 10 and 20 inclusive. Show their username, and favorite coin.
    #-- User.where(age: 10..20).select(:username, :favorite_coin)

    #Find all users not younger than the age of 11. Use `where.not`
    #-- User.where.not(age: 0..11)
    #-- User.where.not("age <= 11")

    #Find all favorite coins of our users
    #-- User.group(:favorite_coin).select(:favorite_coin)

    #Find all users who has a favorite coin in this list and order by ascending
    #favorite_coins = ["Bitcoin", "Ethereum"]
    #-- first save array: favorite_coins = ["Bitcoin", "Ethereum"]
    #-- User.where('favorite_coin IN (?)', favorite_coins)
    #-- User.where(favorite_coin: favorite_coins).order(username: :asc)
    
end
