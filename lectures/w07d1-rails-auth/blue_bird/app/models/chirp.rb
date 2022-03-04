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
        if body && body.length > 140
            errors[:body] << 'too long'
        end
    end



# # MORE ACTIVE RECORD!!!

    # #Demo 3 (Using Associations and Joins)

    # #Find all chirps for a particular user
    # User.find_by(username: 'Samsung').chirps # creates two queries: one for find_by and one for chirps
    # Chirp.select('*').joins(:author).where("users.username = 'Samsung'")
    # Chirp.joins(:author).where(users: {username: 'Samsung'}) # one query which is preferred


    # #Find all chirps liked by people with coding affiliation of JavaScript
    # Chirp.joins(:likers).where('users.coding_affiliation = ?', 'JavaScript')
    # Chirp.joins(:likers).where("users.coding_affiliation = 'JavaScript'")

    # #Get only the unique values from the previous query
    # Chirp.joins(:likers).where('users.coding_affiliation = ?', 'JavaScript').distinct


    # #Find all chirps with no likes
    # Chirp.left_outer_joins(:likes).where('likes.id IS NULL')
    # Chirp.left_outer_joins(:likes).where(likes: {id: nil})

    # #Find how many likes each chirp has
    # Chirp.joins(:likes).group('chirps.id').count('likes.id')


    # #Find chirps with at least 3 likes
    # Chirp.joins(:likes).group('chirps.id').having('COUNT(likes.id) >= 2').pluck(:id, :body)
    






    


# Includes #

    def self.see_chirp_authors_n_plus_one
        chirps = Chirp.all # +1

        chirps.each do |chirp| 
            puts chirp.author.username #n
        end
    end

    def self.see_chirps_optimized
        chirps = Chirp.includes(:author).all

        chirps.each do |chirp|
            puts chirp.author.username
        end
    end


    
# Joins #
    def self.see_chirp_num_likes_n_plus_one
        chirps = Chirp.all
        chirps.each do |chirp|
            puts chirp.likes.length
        end
    end

    def self.see_chirp_num_likes_optimized
        chirps_with_likes = Chirp
            .select("chirps.*, COUNT(*) AS num_likes")
            .joins(:likes)
            .group(:id)

        chirps_with_likes.each do |chirp|
            puts chirp.num_likes
        end
    end


end
