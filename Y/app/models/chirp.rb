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

  has_many :likes,
    primary_key: :id,
    foreign_key: :chirp_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :liker
  
end
