# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord 


    validates :body, presence: true 
    # preset validations
    validate :body_too_long
    # custom validations 

    belongs_to :author,
        primary_key: :id,  
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like,
        dependent: :destroy


    has_many :likers,
        through: :likes,
        source: :liker
        
        
    def body_too_long
        if body && body.length > 100
            errors.add(:body, "too long")
        end 
    end 

    #Demo 3 (Using Associations and Joins)
    #Find all chirps for a particular user

    #Find all chirps liked by people with coding pref of JavaScript
   

    #Get only the unique values from the previous query


    #Find all chirps with no likes
   

    #Find how many likes each chirp has
   

    #Find chirps with at least 3 likes and return only those chirp bodies in an array
 







    #Demo 4(Includes and Joins)
    # Includes #
    # def self.see_chirps_authors_n_plus_one
    #     # the "+1"
    #     chirps = Chirp.all
    #     # the "N"
    #     chirps.each do |chirp|
    #         puts chirp.author.username
    #     end
    # end

    # def self.see_chirps_optimized
    #     # pre-fetches data
    #     chirps = Chirp.includes(:author).all
    #     chirps.each do |chirp| 
    #     # uses pre-fetched data 
    #         puts chirp.author.username
    #     end
    # end


    # # Joins #
    # def self.see_chirp_num_likes_n_plus_one
    #     chirps = Chirp.all
    #     chirps.each do |chirp|
    #         puts chirp.likes.length
    #     end
    # end

    # def self.see_chirp_num_likes_optimized
    #     chirps_with_likes = Chirp
    #         .select("chirps.*, COUNT(*) AS num_likes")
    #         .joins(:likes)
    #         .group(:id)
    
    #     chirps_with_likes.each do |chirp|
    #         # puts chirp.num_likes
    #         puts "chirp_body: #{chirp.body}, likes: #{chirp.num_likes}"
    #     end
    # end
end 


