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
end
