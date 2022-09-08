# == Schema Information
#
# Table name: chirps
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Chirp < ApplicationRecord
  validates :title, presence: true
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
  
end
