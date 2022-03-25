# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord

    validates :body, presence: true
    validate :body_too_long

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
    
    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like

    has_many :likers,
        through: :likes,
        source: :liker

    def body_too_long
        if body && body.length > 281
            self.errors.add(:body,"Too long!")
        end
    end
    
end



#Demo 3 (Using Associations and Joins)
    #Find all chirps for a particular user

    #Find all chirps liked by people with coding preference of JavaScript

    #Get only the unique values from the previous query

    #Find all chirps with no likes

    #Find how many likes each chirp has

    #Find chirps with at least 3 likes
    
    #Use pluck on previous query












#Demo 4
# # Includes #

# def self.see_chirp_authors_n_plus_one

# end

# def self.see_chirps_optimized

# end

# # # Joins #

# def self.see_chirp_num_likes_n_plus_one
  
# end

# def self.see_chirp_num_likes_optimized
 
# end

    