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
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  #validates :email, :username, presence: true, uniqueness: true     <== also valid

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

  has_many :chirp_likers,
    through: :chirps,
    source: :likers


  # AR queries

  # find all users between the ages of 10 and 20 inclusive
  def self.find_age_range
    # User.where("age BETWEEN 10 AND 20")
    # User.where("age BETWEEN ? AND ?", 10, 20)
    User.where(age: 10..20)
  end

  # Find all users not younger than the age of 11
  def self.querytwo
    User.where.not("age < 11")
  end

  # Find all favorite_coins of our users
  def self.querythree
    # User.select("favorite_coin").distinct
    User.select(:favorite_coin).group(:favorite_coin)
    # User.select("favorite_coin").group("favorite_coin").each {|user| puts user.favorite_coin}
  end

  # Find all users who has a favorite_coin in this list and order by ascending username
  def self.queryfour
    favorite_coins = ["Bitcoin", "Ethereum"]
    User.select(:username).where("favorite_coin IN (?)", favorite_coins)
  end

  # Find all chirps for Chris 'chrismas'
  def self.queryfive
    # chris = User.find_by_username('chrismas')
    # chris.chirps
    # User.find_by_username('chrismas').chirps
    Chirp.joins(:user).where("username = 'chrismas'")
    # User.joins(:chirps).where("username = 'chrismas'")
  end



end
