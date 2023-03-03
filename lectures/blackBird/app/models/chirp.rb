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

class Chirp < ApplicationRecord
    validates :body, presence: true 
    validates :user_id, presence: true

    validate :body_too_long

    belongs_to :user, 
        primary_key: :id,
        foreign_key: :user_id,
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
        if body && body.length > 144
            errors.add(:body, "too long")
        end 
    end

    def self.liked_more_than_n_times(num)
        Chirp
            .left_outer_joins(:likes)
            .group(:id)
            .having('COUNT(likes.id) >= (?)', num)
            .select('chirps.*')
    end

    #Find all chirps for a particular user
    User.find_by(username: 'wakka_wakka').chirps # two database hits
    Chirp.joins(:user).where("users.username = 'wakka_wakka") # one database hit
    Chirp.joins(:user).where(users: { username: 'wakka_wakka' }).pluck(:body)

    #Find all chirps written by people that are 11 years old, select body
    Chirp.joins(:user).where('users.age = 11').pluck(:body, 'users.username')

    #Find all chirps liked by people that are 11 years old
    Chirp.joins(:likers).where('users.age = 11').pluck(:body)
    # Chirp.joins('users ON chirps.user_id = users.id').where('users.age = 11').pluck(:body)

    #Get only the unique values from the previous query
    Chirp.joins(:likers).where('users.age = 11').distinct(:id).pluck(:body)

    #Find all chirps with no likes
    Chirp.left_outer_joins(:likes).where('likes.id IS NULL').pluck(:body)
    Chirp.left_outer_joins(:likes).group(:id).count('likes.id')

    #Find how many likes each chirp has
    Chirp.left_outer_joins(:likes).group(:id).count('likes.id')

    #Find chirps with at least 3 likes
    Chirp.left_outer_joins(:likes).group(:id).having('COUNT(likes.id) >= 3').pluck(:id, :body)

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
        chirps = Chirp.all.includes(:user)

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