# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  age        :integer          not null
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
        class_name: :Like,
        dependent: :destroy

    has_many :liked_chirps,
        through: :likes,
        source: :chirp

    # #Get first user record, use first
    # User.first

    # #Get last user record, use last
    # User.last

    # #Find a user that exists by id, use find
    # User.find(8)

    # #Find a user that doesn't exist by id, use find
    # # User.find(9001) # fails loudly

    # #Find a user by username, use find_by
    # User.find_by(id: 8)
    # User.find_by(username: 'all_powerful_elliot')

    # #Find a user by username that does not exist, use find_by
    # User.find_by(id: 9001) # fails quietly

    # #Find all users between the ages of 10 and 20 inclusive. Show their username and email.
    # User.where('age BETWEEN 10 AND 20')
    # User.where(age: 10..20).select(:username, :email)

    # #Find all users not younger than the age of 11. Use `where.not`
    # User.where.not('age < 11')

    # #Show off group
    # User.group(:age).select(:age, 'COUNT(*) AS num')

    # #Show off order
end 