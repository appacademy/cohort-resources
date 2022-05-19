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

end
