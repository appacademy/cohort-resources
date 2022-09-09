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
  validates :author_id, presence: true
  #validates :title, :body, author_id, presence: true     <== also valid
  # validates :body, length: { max: 600, min: 0 }
  validate :body_too_long   #no "s" for custom validations

  belongs_to :user,
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
    if body && body.length > 280
      errors.add(:body, "too long")
    end
  end

  # Find all chirps liked by people whose favorite coin is Dogecoin
  def self.queryone
    # likers is a through association so this is a double join
    # we have access to both tables
    # Chirp.joins(:likers).where("favorite_coin = 'Dogecoin'")
    Chirp.joins(:likers).where(users: {favorite_coin: 'Dogecoin'})
  end

  # Get only the unique values from the previous query
  def self.querytwo
    Chirp.select("chirps.body").joins(:likers).where("favorite_coin = 'Dogecoin'").distinct
  end

  # Find all chirps with no likes
  def self.nolikes
    Chirp.left_outer_joins(:likes).where(likes: {id: nil})
    # Chirp.left_outer_joins(:likes).where("likes.id IS NULL")
  end

  # Find how many likes each chirp has
  def self.howmanylikes
    Chirp.select("chirps.id, COUNT(*) as num_likes").joins(:likes).group(:id).each {|chirp| chirp.num_likes}
    # Chirp.joins(:likes).group(:id).count()
  end

  # Find chirps with at least 3 likes - just return the chirp bodys (use pluck)
  def self.lastquery
    Chirp.joins(:likes).group("chirps.id").having("COUNT(*) >= 3").pluck("chirps.body")
  end


  # ----------- INCLUDES ------------------

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
