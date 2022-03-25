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

    def self.see_chirp_authors_n_plus_one #bad
        chirps = Chirp.all
        chirps.each do |chirp|
            puts chirp.author.username
        end
    end

    def self.see_chirps_optimized #nice!
        chirps = Chirp.all.includes(:author)
        chirps.each do |chirp|
            puts chirp.author.username
        end
    end

    # # Joins #

    def self.see_chirp_num_likes_n_plus_one
        chirps = Chirp.all
        chirps.each do |chirp|
            puts chirp.likes.length
        end
    end

    def self.see_chirp_num_likes_optimized
        chirps = Chirp.select('chirps.*, COUNT(likes.id) AS num_likes')
            .left_outer_joins(:likes).group(:id) #array-like object
        chirps.each do |chirp|
            puts chirp.num_likes
            # puts chirp.id
        end
    end
    
end



#Demo 3 (Using Associations and Joins)
    #Find all chirps for a particular user (username = diegous)
    # User.find_by(username: 'diegous').chirps #hits the database twice
    # Chirp.joins(:author).where(users: { username: 'diegous' }) #hits the db once
    # #joins takes in an association
    # # chirp join users on users.id = chirps.author_id
    # #Find all chirps liked by people with coding preference of JavaScript
    # Chirp.joins(:likers).where(users: { coding_pref: 'JavaScript'})
    # #Get only the unique values from the previous query
    # Chirp.joins(:likers).where(users: { coding_pref: 'JavaScript'}).distinct
    # #Find all chirps with no likes
    # Chirp.left_outer_joins(:likes).where(likes: { chirp_id: nil })
    # #Find how many likes each chirp has
    # Chirp.left_outer_joins(:likes).group(:body).count('likes.id')
    # #Find chirps with at least 3 likes
    # Chirp.select(:id, :body).left_outer_joins(:likes).group(:id, :body).having('COUNT(likes.id) > 2')
    # #content of select needs to match group or include aggregate
    # #Use pluck on previous query
    # Chirp.left_outer_joins(:likes).group(:id, :body).having('COUNT(likes.id) > 2').pluck(:body)











#Demo 4
# # Includes #



    