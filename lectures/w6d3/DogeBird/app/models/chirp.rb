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
    validate :body_too_long

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
        # optional: true

    has_many :likes,
        primary_key: :id,
        foreign_key: :chirp_id,
        class_name: :Like,
        dependent: :destroy

        has_many :likers,
        through: :likes,
        source: :liker

    def body_too_long
        if body && body.length > 140
            errors.add(:body, 'too long')
        end
    end

# -----------------------------------------------------------------

# Find all chirps liked by people politically affiliated with JavaScript

# Chirp.joins(:likers).where("users.favorite_coin = (?)", "Bitcoin")


# -------------------------------------------------------------------
# Get only the unique values from the previous query
# Chirp.joins(:likers).where("users.favorite_coin = (?)", "Bitcoin").distinct


# ====================-----------------------========================

# Find all chirps with no likes

# Chirp.left_outer_joins(:likes).where(likes: { id: nil })

# -------------------------------------------------------------------

# Find how many likes each chirp has

# Chirp.select(:id, :body, "COUNT(*) as num_likes").joins(:likes).group(:id)

# We have to index into each record to return num_likes
# We can use #attributes to see all attributes


# ============== PLUCK ===========
# Find chirps with at least 3 likes Try to use pluck!

# Note: Use this example to show the different return values of pluck vs select
# The reason that pluck has to go at the end is because these are all active record methods, NOT array methods, so they need to be called on a relation if we want to chain them


# Chirp.joins(:likes).group(:id).having("COUNT(*) >= ?", 3).pluck(:body)
# Chirp.joins(:likes).group(:id).having("COUNT(*) >= ?", 3).select(:body)

# ----------- INCLUDES ------------------

# def self.see_chirp_authors_n_plus_one
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
#         puts chirp.num_likes
#     end
# end


end
