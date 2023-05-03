# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# FROM chirps
# JOIN users
# ON chirps.user_id = users.id

## Chirp.joins(:author)

class Chirp < ApplicationRecord
    validates :body, :user_id, presence: true
    validate :body_too_long

    def body_too_long
        if body && body.length > 255
            self.errors.add(:body, message: "was too long")
        end
    end

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes,
        dependent: :destroy

    has_many :likers,
        through: :likes,
        source: :liker

    has_many :authors_likes,
        through: :author,
        source: :likes,
        dependent: :destroy


    # Find all chirps for a particular user - ai_mike
    def self.find_user_chirps
        Chirp.joins(:author).where(users: {username: 'ai_mike'})
        # Chirp.joins(:author).where("users.username = 'ai_mike'")
    end

    # Find all chirps liked by people affiliated with humans
    def self.find_human_liked_chirps
        Chirp.joins(:likers).where(users: {affiliation: 'human'})
        # Chirp.joins(:likers).where("users.affiliation = 'human'")
    end

    # Find all chirps with no likes
    def self.chirps_no_likes
        Chirp.left_joins(:likes).where(likes: {id: nil})
    end

    # Find how many likes each chirp has. display id body and num likes
    def self.chirps_num_likes
        Chirp.select(:id, :body, "COUNT(likes.chirp_id) as num_likes").joins(:likes).group(:id)
        # Chirp.select(:id, :body, "COUNT(likes.chirp_id) as num_likes").left_joins(:likes).group(:id)
        # Chirp.select(:id, :body, "COUNT(likes.chirp_id) as num_likes").left_joins(:likes).group(:id).order(num_likes: :desc)
    end

    # Find chirps with at least 2 likes. use pluck to get the body!
    def self.pluck_two_or_more_liked_chirps
        # Chirp.chirps_num_likes.having("COUNT(*) >= 2").pluck(:body)
        # Chirp.joins(:likes).group(:id).having("COUNT(chirps.id) >= 2").pluck(:id, :body)
        Chirp.joins(:likes).group(:id).having("COUNT(chirps.id) >= 2").pluck()
    end

     # Includes #

     def self.see_chirp_authors_n_plus_one
        # the "+1"
        chirps = Chirp.all

        # the "N"
        chirps.each do |chirp|
            puts chirp.author.username
        end
        nil

    end

    def self.see_chirps_optimized
        # pre-fetches data
        chirps = Chirp.includes(:author).all

        chirps.each do |chirp| 
        # uses pre-fetched data 
            puts chirp.author.username
        end
        nil
    end

    # Joins #

    def self.see_chirp_num_likes_n_plus_one
        chirps = Chirp.all

        chirps.each do |chirp|
            puts chirp.likes.length
        end
        nil
    end

    def self.see_chirp_num_likes_optimized
        chirps_with_likes = Chirp
            .select("chirps.*, COUNT(*) AS num_likes")
            .joins(:likes)
            .group(:id)
    
        chirps_with_likes.each do |chirp|
            puts chirp.num_likes
        end
        nil
    end

end
