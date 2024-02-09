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
  validate :body_too_long

  def body_too_long 
    if self.body && self.body.length > 140
      self.errors.add(:body, message: "too long")
    end 
  end 

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

  def self.find_chirps_by_username(username)
    # User.find_by(username: username).chirps
    # Chirp.joins(:user).where("users.username = :username", username: username)
    Chirp.joins(:user).where(users: { username: username })
  end

  def self.find_chirps_by_coding_pref(coding_pref)
    Chirp.joins(:user).where(users: { coding_pref: coding_pref })
  end

  def self.find_chirps_liked_by_user(username)
    Chirp.joins(:likers).where(users: { username: username })
  end

  def self.find_unliked_chirps
    Chirp.left_outer_joins(:likes).where(likes: { id: nil })
  end

  def self.find_chirps_with_at_least_n_likes(num)
    Chirp.left_outer_joins(:likes).group('likes.chirp_id').having('COUNT(chirps.id) >= (?)', num).order('COUNT(likes.id) DESC').pluck(:id, :body)
  end

  def self.find_chirps_authored_and_liked_by_given_age(age)
    Chirp.joins(:user, :likers).where(users: { age: age }).where(likers_chirps: { age: age })
  end

  def self.see_chirp_authors
    chirps = Chirp.all.includes(:user)

    chirps.each do |chirp|
      puts chirp.user.username
    end
  end

  def self.see_chirp_num_likes
    chirps = Chirp
      .select("chirps.*", "COUNT(likes.id) AS num_likes")
      .left_outer_joins(:likes)
      .group(:id)

    chirps.each do |chirp|
      puts chirp.num_likes
    end
  end
end
