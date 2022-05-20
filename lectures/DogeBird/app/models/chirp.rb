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
  # validates :author_id, :body, presence: true
  validates :body, presence: true
  validate :body_too_long

  def body_too_long
    if body && body.length > 140
      errors[:body] << 'too long'
    end
  end

  # now that we have made an association
  # we can call Chirp.user
  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
    # optional: true # allow a null value 
    # in this case chirp no author id

  has_many :likes,
    primary_key: :id, 
    foreign_key: :chirp_id,
    class_name: :Like

  has_many :likers,
  # what method in the current class
    through: :likes,
    source: :user


  #Find all chirps for a particular user

  #Find all chirps liked by people whose favorite coin is Dogecoin

  #Get only the unique values from the previous query

  #Find all chirps with no likes

  #Find how many likes each chirp has

  #Find chirps with at least 3 likes


  # Includes #

  # def self.see_chirp_authors_n_plus_one
  #   # the "+1"
  #   chirps = Chirp.all

  #   # the "N"
  #   chirps.each do |chirp|
  #       puts chirp.author.username
  #   end

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
