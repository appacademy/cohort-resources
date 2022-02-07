# == Schema Information
#
# Table name: users
#
#  id                 :bigint           not null, primary key
#  username           :string           not null
#  email              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  coding_affiliation :string           not null
#  age                :integer          not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :age, :coding_affiliation, presence: true
    
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






    # ACTIVE RECORD!!! 

    #DEMO 1 (Finder Methods)

    #Get first user record, use first

    # User.first

    #Get last user record, use last

    # User.last

    #Find a user that exists by id, use find

    # User.find(4)

    #Find a user that doesn't exist by id, use find

    #User.find(50) raises an exception error

    #Find a user by username, use find_by

    # User.find_by({username: 'taylor_made'})

    #Find a user by username that does not exist, use find_by

    # User.find_by(username: 'taylor_is_the_best')  #return nil





    #DEMO 2 (Queries with Conditions)

    #Find all users between the ages of 10 and 20 inclusive. Show their username, and coding affiliation.
    User.where(age: 10..20).select(:username, :coding_affiliation)
    User.where("age BETWEEN 10 AND 20").select(:username, :coding_affiliation)


    #Find all users not younger than the age of 11. Use `where.not`

    User.where.not('age < 11') # this is NOT preferred because of SQL injection attacks
    User.where.not('age < ?', 11) # preferred because sanitizes input



    #Find all coding_affiliations of our users
    User.select("DISTINCT (coding_affiliation)")
    User.select(:coding_affiliation).distinct
    User.select(:coding_affiliation).group(:coding_affiliation)


    #Find all users who has a coding affiliation in this list and order by ascending
         coding_affiliations = ["JavaScript", "Python"]

    User.where("coding_affiliation IN ('JavaScript', 'Python')").order(username: :asc)
    User.where({:coding_affiliation => coding_affiliations}).order(:username)

end
