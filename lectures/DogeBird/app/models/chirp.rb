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
    validates :body, :author_id, presence: true
    validate :body_too_long

    def body_too_long
        if body && body.length > 140
            errors.add(:body, "too long")
        end
    end


    belongs_to :user,
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
        source: :liker,
        dependent: :destroy


    # chirp queries

    # Find all of Chris's chirps
    def self.find_chris_chirps
        # Chirp.joins(:user).where("users.username = 'chrispy'")
        Chirp.joins(:user).where(users: {username: 'chrispy'})
    end

    # Find all chirps liked by people whose favorite coin is Dogecoin
    def self.find_doge_liked_chirps
        # Chirp.joins(:user) # finds chirp authors
        # Chirp.joins(:likes) # finds liker_ids of people who liked the chirps
        Chirp.joins(:likers).where("users.favorite_coin = 'Dogecoin'")
    end

    # Find all chirps liked by people whose favorite coin is Dogecoin with no repeats
    def self.find_doge_liked_chirps_no_repeats
        Chirp.joins(:likers).where("users.favorite_coin = 'Dogecoin'").distinct
    end

    # Find all chirps with no likes
    def self.no_likes
        # Chirp.left_outer_joins(:likes).where(likes: {id: nil})
        Chirp.left_outer_joins(:likes).where("likes.id IS NULL")
    end

    # Find how many likes each chirp has.
    def self.num_likes_per_chirp
        Chirp.select("count(*) as num_likes").joins(:likes).group(:chirp_id)
    end

    # Find chirps with at least 3 likes
    def self.at_least_3_likes
        Chirp.joins(:likes).group(:id).having("COUNT(*) >= 3")
    end


    
     # Includes #

    def self.see_chirp_authors_n_plus_one
        # the "+1"
        chirps = Chirp.all

        # the "N"
        chirps.each do |chirp|
            puts chirp.user.username
        end

    end

    def self.see_chirps_optimized
        # pre-fetches data
        chirps = Chirp.includes(:user).all

        chirps.each do |chirp| 
        # uses pre-fetched data 
            puts chirp.user.username
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
