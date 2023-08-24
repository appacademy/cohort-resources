# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord
  validates :body, presence: true
  # validates :user_id, presence: true # done by belongs to
  # custom validation for short messages
  validate :body_too_long

  def body_too_long
    if body && body.length > 140
      self.errors.add(:body, message: "too long")
    end
  end

  # belongs to automatically validates foreign key presence true
  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    # class_name: "User" # same thing

  has_many :likes

  has_many :likers,
    through: :likes,
    source: :liker
    
  def self.find_mikes_chirps
    Chirp.joins(:author).where(users: {username: "ai_mike"})
    # Chirp.where("users.username = 'ai_mike'").joins(:author)
  end

  #find chirps that have been liked my humans
  def self.liked_by_humans 
    Chirp.joins(:likers).where(users: {affiliation: "human"})
  end

  def self.with_no_likes
    Chirp.left_joins(:likes).where(likes: {id: nil})
    # Chirp.left_joins(:likes).where("likes.id IS NULL")
  end

  def self.chirps_with_likes
    # Chirp.left_joins(:likes).where.not(likes: {id: nil})
    Chirp.joins(:likes)
  end

  def self.get_me_body_and_id_of_liker
    Chirp.joins(:likes).pluck(:body, :liker_id)
  end

  def self.get_likers_name
    likers = Chirp.first.likers

    likers.each do |user|
      p user.username
    end
  end

  def self.see_authors_name_n_plus_one_issue
    chirps = Chirp.all # the +1 (one query)
    chirps.each do |chirp|
      chirp.author.username
    end
    nil
  end

  def self.see_authors_name_fixed
    chirps = Chirp.includes(:author).all # the +1 (one query)
    chirps.each do |chirp|
      chirp.author.username
    end
    nil
  end


  def self.see_chirps_num_of_likes 
    chirps = Chirp.all
    chirps.each do |chirp|
      puts chirp.likes.length
    end
  end

  def self.see_chirps_num_of_likes_efficient 
    chirp_with_likes = Chirp.select("chirps.*, COUNT(*) AS num_likes")
                          .joins(:likes)
                          .group(:id)

    chirp_with_likes.each do |chirp|
      puts chirp.num_likes
    end
  end

end
