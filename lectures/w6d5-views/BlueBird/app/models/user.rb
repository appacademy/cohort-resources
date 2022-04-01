# == Schema Information
#
# Table name: users
#
#  id          :bigint           not null, primary key
#  username    :string           not null
#  email       :string           not null
#  coding_pref :string           not null
#  age         :integer          not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true

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
end



#DEMO 1 (Finder Methods)

#     #Get first user record, use first
#     User.first ✅
#     #Get last user record, use last
#     User.last ✅
#     #Find a user that exists by id, use find
#     User.find(10) ✅ #takes ids as an argument
#     #Find a user that doesn't exist by id, use find
#     User.find(100) 😭 #fails loudly
#     #Find a user by username, use find_by
#     User.find_by(username: 'diegous') #takes in a hash
#     #Find a user by username that does not exist, use find_by
#     User.find_by(username: 'xxxnoscope') #fails quietly



# # DEMO 2 (Queries with Conditions)
#     #Find all users between the ages of 10 and 30 inclusive. Show their username, and coding preference.
#     User.select('username, coding_pref').where('age >= 10 AND age <= 30')
#     User.select(:username, :coding_pref).where(age: (10..30))
#     #Find all users not younger than the age of 11. Use `where.not`
#     User.where.not(age: (0..10))
#     User.where.not('age < ?',11)
#     #Find all coding preferences of our users
#     User.select(:coding_pref).distinct
#     User.select(:coding_pref).group(:coding_pref)
#     #Find all users who has a coding_preference in this list and order by ascending username
#     coding_preferences = ["JavaScript", "Ruby"]
#     User.select(:username, :coding_pref)
#         .where(coding_pref: coding_preferences) 
#         .order(:username => :desc)
#         # .order(username: :desc)
