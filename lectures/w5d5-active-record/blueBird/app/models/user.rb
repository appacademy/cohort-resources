# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  email      :string           not null
#
class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    # validates :column_name, validations.....


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
        
        
    # has_many :chirp_likes,
    #     through: :chirps,
    #     source: :likes 

    # has_many :chirp_likers,
    #     through: :chirp_likes,
    #     source: :liker


end 




 # DEMO 1 (Finder Methods)

    #Get first user record, use first
 User.first

    #Get last user record, use last
    User.last

    #Find a user that exists by id, use find
    User.find(2)

    #Find a user that doesn't exist by id, use find
    User.find(100)
    # get back 'ActiveRecord::RecordNotFound: Couldn't find User with 'id'=100'
    #Find a user by username, use find_by
    User.find_by(username: 'dieguccio')

    #Find a user by username that does not exist, use find_by
    User.find_by(username: 'dieguccio1')
    #get back nil, which can be prefered


    #DEMO 2 (Queries with Conditions)
    #Find all users between the ages of 10 and 20 inclusive. Show their username, and coding pref.
   

    #Find all users not younger than the age of 11. Use `where.not`
    

    #Find all coding_prefs of our users
    

    #Find all users who has a coding_pref in this list and order by ascending
